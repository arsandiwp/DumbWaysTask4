function submitData() {
    let project = document.getElementById("project").value;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("upload").files;

    if (project == "") {
        return alert("Nama project harus diisi yak");
     } else if (start == "") {
        return alert("Tanggal mulai harus diisi yak");
     } else if (end == "") {
        return alert("Tanggal selesai harus diisi yak");
     } else if (description == "") {
        return alert("Deskripsi harus diisi yak");
     } else if (image == "") {
        return alert("Gambar harus diisi yak");
     }
};



let dataBlog = [];

function addBlog(event) {
    event.preventDefault();

    let project = document.getElementById("project").value;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;

    const nodejs = '<i class="fa-brands fa-node-js"></i>';
    const html = '<i class="fa-brands fa-html5"></i>';
    const php = '<i class="fa-brands fa-php"></i>';
    const reactjs = '<i class="fa-brands fa-react"></i>';

    let iconnodejs = document.getElementById("nodejs").checked ? nodejs : "";
    let iconhtml = document.getElementById("html").checked ? html : "";
    let iconphp = document.getElementById("php").checked ? php : "";
    let iconreactjs = document.getElementById("reactjs").checked ? reactjs : "";
    // let checkbox = document.getElementById("technologies").value;
    let image = document.getElementById("upload").files;

    // membuat url
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        project,
        start,
        end,
        description,
        iconnodejs,
        iconhtml,
        iconphp,
        iconreactjs,
        // checkbox,
        image
    };

    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog();
}

function renderBlog() {
    document.getElementById("content").innerHTML = "";

    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("content").innerHTML += `
        <div class="card" >
            <img src="${dataBlog[index].image}" alt="hp">
            <p class="title">${dataBlog[index].project}</p>
            <p>${dataBlog[index].start} Sampai ${dataBlog[index].end}</p>
            <p class="about">${dataBlog[index].description}</p>
            <p>${dataBlog[index].iconnodejs}${dataBlog[index].iconhtml}${dataBlog[index].iconphp}${dataBlog[index].iconreactjs}</p>
            <div class="button">
               <button>edit</button>
               <button>delete</button>
            </div>  
         </div>  
        `;
    }
}