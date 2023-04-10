function generate(){
   let quotes = {
    "― Candace Bushnell" :'"Maybe some women are not meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them"',
    "― Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions"',
    "― Mary Astell" : '"If all men are born free, how is it that all women are born slaves?"'
   }

   let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];
    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = author;
}