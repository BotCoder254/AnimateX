const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');
const { glob } = require('glob');

async function injectComponents() {
    try {
        // Get all HTML files
        const htmlFiles = await glob('website/*.html');
        
        // Get all components
        const components = await glob('website/components/*.html');
        
        // Read each component's content
        const componentContents = {};
        for (const component of components) {
            const name = path.basename(component, '.html');
            componentContents[name] = await fs.readFile(component, 'utf8');
        }
        
        // Process each HTML file
        for (const file of htmlFiles) {
            console.log(`Processing ${file}...`);
            
            // Read the HTML file
            const html = await fs.readFile(file, 'utf8');
            const $ = cheerio.load(html);
            
            // Inject mobile menu after navigation
            if (componentContents['mobile-menu']) {
                $('nav').first().after(componentContents['mobile-menu']);
            }
            
            // Add any other component injections here
            
            // Save the modified file
            await fs.writeFile(file, $.html());
            console.log(`Updated ${file}`);
        }
        
        console.log('Component injection complete!');
    } catch (error) {
        console.error('Error injecting components:', error);
        process.exit(1);
    }
}

injectComponents(); 