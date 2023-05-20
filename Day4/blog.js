let dataBlog = [];

function addBlog(event) {
    event.preventDefault();

    let project = document.getElementById("project").value;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let checkbox = document.getElementById("technologies").value;
    let image = document.getElementById("upload").files;

    // membuat url
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        project,
        start,
        end,
        description,
        checkbox,
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
            <i class="fa-brands fa-app-store-ios"></i>
            <i class="fa-brands fa-android"></i>
            <i class="fa-brands fa-java"></i>
            <div class="button">
               <button>edit</button>
               <button>delete</button>
            </div>  
         </div>  
        `;
    }
}