import fs from "fs";

export function saveToFile(data) {
  const filePath = "./fallback-data.txt";
  fs.appendFile(filePath, JSON.stringify(data) + "\n", (err) => {
    if (err) console.error("Failed to write to file:", err);
    else console.log("Data saved to fallback file.");
  });
}
