const onAddToList = () => {
 const container = document.getElementById("taskList");    
 console.log({container});
 const newSection = document.createElement("div");
    const strin1 = document.getElementById("busqueda").value;

    
 const sectionContent = ` 
        <section id="section">
                <div>
                    <header>
                        <h3> ${strin1} </h3>
                    </header>

                    <div class="DiV_btnADS">
                        <button class="btnADS">edit</button>
                    </div>

                </div>

                <article>
                    <h3>asd</h3>
                    <p>Contenido del tema I</p>
                    <footer></footer>
                </article>
            </section> `;

    newSection.innerHTML  = sectionContent;
    container.appendChild(newSection);
}

const AddToList = () => {
 const averrr = document.getElementById("box1Cont");    
 console.log({averrr});
 const newSectionn = document.createElement("div");
    const strin11 = document.getElementById("inputTextAgg").value;

    
 const sectionContentt = ` 
    
    <div class="botomEj">
        <h3>${strin11}</h3>
    </div>
    
 `;

    newSectionn.innerHTML = sectionContentt;
    averrr.appendChild(newSectionn);
}