import {Injectable, Output} from '@angular/core';
import JSZip from 'jszip';
import {DXT} from 'docxtemplater';
import integer = DXT.integer;
import {mkdir} from 'fs';



@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  public ptsArray = [];

  constructor() {
  }

  handleFileInput(event): Promise<any> {
    return this.findPoints(this.findParts(this.readFile(event.target.files)));
  }

  private readFile(fileList): Promise<any> {
    // accepts list of files from event
    // returns string of word/document.xml file
    const myFile: File = fileList[0];
    const jsZip = new JSZip();
    const stringText = '';
    return (jsZip.loadAsync(myFile).then((zip) => {
        return (zip.files['word/document.xml'].async('string'));
    }));
  }

  private findParts(fileText: Promise<any>): Promise<any> {
    // accepts string of document.xml and locates 'w:t' tags containing text
    // returns string of text contained in document.xml
    return fileText.then(txt => {
      const parser = new DOMParser();
      const textDoc = parser.parseFromString(txt, 'text/xml');
      const textArray = textDoc.getElementsByTagName('w:t');
      let total = '';
      for (let i = 0; i < textArray.length; i++) {
        total += textArray[i].childNodes[0].nodeValue;
      }
      return total;
    });
  }
  private findPoints(cleanedText: Promise<any>): Promise<any> {
    // accepts string of text from document.xml
    // returns array of point values found in document
    let tempArray;
    const resultsArray = [];
    const re = new RegExp('\\[.*?\\]', 'g');
    const reNum = new RegExp('\\d+');
    return cleanedText.then(txt => {
      tempArray = re.exec(txt);
      while (tempArray !== null) {
        resultsArray.push(tempArray[0]);
        tempArray = re.exec(txt);
      }
      for (const elem of resultsArray) {
        this.ptsArray.push(reNum.exec(elem)[0]);
      }
      return this.ptsArray;
    });
  }
}




