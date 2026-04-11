import requests
import sys
from datetime import datetime

class BackendTester:
    def __init__(self, base_url="https://emergent-redesign.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        print(f"Response: {response.json()}")
                    except:
                        print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "subject": "Test Subject",
            "message": "This is a test message from automated testing."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST", 
            "contact",
            200,
            data=test_data
        )
        
        if success and response.get('success'):
            print("✅ Contact form submission successful")
            return True
        else:
            print("❌ Contact form submission failed")
            return False

    def test_get_contact_messages(self):
        """Test retrieving contact messages"""
        return self.run_test("Get Contact Messages", "GET", "contact/messages", 200)

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test creating a status check
        test_data = {"client_name": "test_client"}
        create_success, _ = self.run_test(
            "Create Status Check",
            "POST",
            "status", 
            200,
            data=test_data
        )
        
        # Test getting status checks
        get_success, _ = self.run_test("Get Status Checks", "GET", "status", 200)
        
        return create_success and get_success

def main():
    print("🚀 Starting Backend API Tests...")
    print("=" * 50)
    
    tester = BackendTester()
    
    # Run all tests
    print("\n📡 Testing API endpoints...")
    tester.test_root_endpoint()
    tester.test_contact_submission()
    tester.test_get_contact_messages()
    tester.test_status_endpoints()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend tests passed!")
        return 0
    else:
        print("⚠️  Some backend tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())