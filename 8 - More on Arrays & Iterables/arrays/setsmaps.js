const ids = new Set(["Hi", "From" ,"set!"]);
ids.add(2);
if(ids.has("Hi")) {
    ids.delete("Hi")
}

console.log(ids.has(2));

for (const entry of ids.entries()) {
    console.log(entry[0]);
}