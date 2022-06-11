function createXmasTree(height) {
    if (height < 100 && height > 0){
        let stringCount = "";
        let reduceCount = height - 1;
        let definitiveCount = "";
        for (let i = 0; i < height; i++){
            stringCount += "*".repeat(i+1) + "_".repeat(reduceCount);
            definitiveCount += stringCount.substring(1).split("").reverse().join("") + stringCount + "\n";
            stringCount = "";
            reduceCount--
        }
        const sharps = "_".repeat(height-1);
        const newSharps = sharps + "#" + sharps;
        definitiveCount += newSharps + "\n" + newSharps;
        return definitiveCount;
    } else{
        return ""
    }
}
console.log(createXmasTree(5))