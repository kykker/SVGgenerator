const fs = require('fs-extra');

module.exports = {
    saveFile: async function saveFile(f, d) {
        try {
            await fs.outputFile( f, d);
            const data = fs.readFile( f, 'utf8');
            console.log(data)
    
        } catch (e) {
            console.error(e)
        }
    }
}