const fs = require('fs');
const yaml = require('yaml');

// Get the JSON string from the command line argument
const jsonString = process.argv[2];

try {
  // Parse the JSON string into an object
  const jsonObject = JSON.parse(jsonString.replaceAll("\n", "\\n"));

  // Check if the file exists
  const filePath = 'events.yaml';
  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    // Read the existing YAML file
    const existingYamlString = fs.readFileSync(filePath, 'utf8');

    // Parse the existing YAML into an object
    const existingYamlObject = yaml.parse(existingYamlString);

    // add a new event by editing the events prop
    existingYamlObject.events = [existingYamlObject.events, jsonObject];

    // Convert the merged object to YAML
    const mergedYamlString = yaml.stringify(existingYamlObject);

    // Write the merged YAML string back to the file
    fs.writeFileSync(filePath, mergedYamlString);

    console.log('YAML entry appended successfully to events.yaml');
  } else {
    // Write the YAML string to a new file
    fs.writeFileSync(filePath, yamlString);

    console.log('Created new file events.yaml with the YAML entry');
  }
} catch (error) {
  console.error('Error converting JSON to YAML:', error);
}
