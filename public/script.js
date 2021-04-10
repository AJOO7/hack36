begin = () => {
    // var date = document.getElementById("date");
    var file = document.getElementById("file");
    if (file.files.length) {
        var reader = new FileReader();

        console.log(reader.readAsBinaryString(file.files[0]));
    }
};