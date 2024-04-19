

function mostraAtividade(e){
  e.preventDefault();
  const form = e.target
  const formData = new FormData(form)
  const meuStorege = localStorage
  x = []
  if(formData.get('tarefa') != ''){
    x.push()
    meuStorege.setItem('atividade',JSON(x))
  }
  alert(meuStorege.getItem('atividade'));
  alert(formData.get('tarefa'));
  
    
}