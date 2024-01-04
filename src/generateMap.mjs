import path from 'path'
import { URL } from 'url';
import { parseFile, renderFile } from "text-mapper"

const map = parseFile("src/textmapper.txt", ["resources"]);


const __dirname = new URL('.', import.meta.url).pathname;
const outputPath = path.join(__dirname, '..', 'output', 'map.svg' )

renderFile(map, outputPath)
