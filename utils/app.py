from flask import Flask, request, jsonify
from jinja2 import Template
import time

app = Flask(__name__)

# Sample data for Monthly Rental Value (MRV) per square foot based on location
MRV_DATA = {
    "Central Indore": 15,
    "Vijay Nagar": 12,
    "Palasia": 14,
    "Scheme 78": 10,
    "Rau": 8
}

# Sample property data
PROPERTY_DATA = {
    "Central Indore": [
        {"name": "Rajwada Palace View Apartments", "area": 1200, "age": 5},
        {"name": "Holkar Legacy Homes", "area": 1500, "age": 10},
        {"name": "Saraswati Vihar Colony", "area": 1000, "age": 15}
    ],
    "Vijay Nagar": [
        {"name": "Apollo DB City Residences", "area": 1100, "age": 3},
        {"name": "Shalimar Township", "area": 1300, "age": 8},
        {"name": "Satya Sai Square Apartments", "area": 950, "age": 12}
    ],
    # Add more locations and properties as needed
}

def calculate_property_tax(location, property_data):
    mrv = MRV_DATA[location]
    area = property_data["area"]
    age = property_data["age"]
    
    # Calculate base tax
    base_tax = area * mrv * 12 * 0.25  # Using mid-range value of 0.25 for the factor
    
    # Apply depreciation
    depreciation = base_tax * 0.10
    
    # Add library cess
    library_cess = base_tax * 0.08
    
    # Calculate total tax
    total_tax = base_tax - depreciation + library_cess
    
    # Simulate a delay
    time.sleep(2)
    
    return {
        "base_tax": base_tax,
        "depreciation": depreciation,
        "library_cess": library_cess,
        "total_tax": total_tax
    }

# HTML template as a string
index_template = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indore Property Tax Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #FF6F61;
            color: white;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            width: 100%;
            max-width: 500px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .welcome {
            margin-bottom: 20px;
        }
        h1 {
            font-size: 32px;
            margin-bottom: 30px;
            text-align: center;
        }
        select, input[type="submit"] {
            width: 100%;
            padding: 15px;
            margin-bottom: 20px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
        }
        select {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            appearance: none;
            background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
            background-repeat: no-repeat;
            background-position: right 10px top 50%;
        }
        select option {
            background-color: #FF6F61;
            color: white;
        }
        input[type="submit"] {
            background-color: white;
            color: #FF6F61;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #FF6F61;
            color: white;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        #loading {
            display: none;
            text-align: center;
            margin-top: 20px;
            font-size: 18px;
        }
        #results {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="welcome">
            <h2>Hi, Rakesh Singh</h2>
            <p>Welcome</p>
        </div>
        <h1>Indore Property Tax Calculator</h1>
        <form id="taxForm" method="POST">
            <select name="location" id="location" required>
                <option value="">Select a location</option>
                {% for location in locations %}
                <option value="{{ location }}">{{ location }}</option>
                {% endfor %}
            </select>
            <select name="property_name" id="property_name" required>
                <option value="">Select a property</option>
            </select>
            <input type="submit" value="Calculate Tax">
        </form>

        <div id="loading">
            Calculating property tax... Checking if the properties are verified... Be patient...
        </div>

        <div id="results"></div>
    </div>

    <script>
        document.getElementById('location').addEventListener('change', function() {
            const location = this.value;
            const propertySelect = document.getElementById('property_name');
            propertySelect.innerHTML = '<option value="">Select a property</option>';

            if (location) {
                fetch(`/get_properties/${location}`)
                    .then(response => response.json())
                    .then(data => {
                        data.forEach(property => {
                            const option = document.createElement('option');
                            option.value = property.name;
                            option.textContent = property.name;
                            propertySelect.appendChild(option);
                        });
                    });
            }
        });

        document.getElementById('taxForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('loading').style.display = 'block';
            fetch('/', {
                method: 'POST',
                body: new FormData(this)
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('results').innerHTML = data;
                document.getElementById('taxForm').style.display = 'none';
            });
        });
    </script>
</body>
</html>
"""

results_template = """
<style>
    .result-container {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    }
    h2 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
    }
    .property-info, .tax-breakdown {
        margin-bottom: 20px;
    }
    .property-info p, .tax-breakdown p {
        margin: 10px 0;
    }
    .tax-item {
        display: flex;
        justify-content: space-between;
    }
    .total-tax {
        font-size: 18px;
        font-weight: bold;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        padding-top: 10px;
        margin-top: 10px;
    }
    button {
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 10px;
        background-color: white;
        color: #FF6F61;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }
    button:hover {
        background-color: #FF6F61;
        color: white;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
</style>
<div class="result-container">
    <h2>Property Tax Results</h2>
    <div class="property-info">
        <p><strong>{{ property.name }} - {{ location }}</strong></p>
        <p>Area: {{ property.area }} sq ft</p>
        <p>Age: {{ property.age }} years</p>
        <p>Monthly Rental Value (MRV): ₹{{ mrv }} per sq ft</p>
    </div>
    <div class="tax-breakdown">
        <h3>Tax Breakdown:</h3>
        <div class="tax-item">
            <span>Base Tax:</span>
            <span>₹{{ "%.2f"|format(tax_info.base_tax) }}</span>
        </div>
        <div class="tax-item">
            <span>Depreciation:</span>
            <span>₹{{ "%.2f"|format(tax_info.depreciation) }}</span>
        </div>
        <div class="tax-item">
            <span>Library Cess:</span>
            <span>₹{{ "%.2f"|format(tax_info.library_cess) }}</span>
        </div>
        <div class="tax-item total-tax">
            <span>Total Tax:</span>
            <span>₹{{ "%.2f"|format(tax_info.total_tax) }}</span>
        </div>
    </div>
</div>
<button onclick="location.reload()">Calculate Another Tax</button>
"""

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        location = request.form['location']
        property_name = request.form['property_name']
        
        if location not in MRV_DATA:
            return "Invalid location"
        
        properties = PROPERTY_DATA.get(location, [])
        selected_property = next((prop for prop in properties if prop['name'] == property_name), None)
        
        if not selected_property:
            return "Property not found"
        
        tax_info = calculate_property_tax(location, selected_property)
        
        return Template(results_template).render(
            location=location,
            property=selected_property,
            mrv=MRV_DATA[location],
            tax_info=tax_info
        )

    return Template(index_template).render(locations=MRV_DATA.keys())

@app.route('/get_properties/<location>')
def get_properties(location):
    if location in PROPERTY_DATA:
        return jsonify(PROPERTY_DATA[location])
    else:
        return jsonify({"error": "Location not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)