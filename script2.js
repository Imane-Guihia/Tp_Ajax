function load_data_covid(){
    fetch('https://disease.sh/v3/covid-19/countries/Morocco')
       .then(response=>response.json())
       .then(data=>{
        const students=data.std;
        const studentList=document.getElementById("studentList");
        studentList.innerHTML='';

        students.forEach(
            student=>{
                const ListItem= document.createElement('li');
                ListItem.textContent=student.name;
                studentList.appendChild(ListItem);
            });
       })
       .catch(error=>console.error('Erreur:',error));

}