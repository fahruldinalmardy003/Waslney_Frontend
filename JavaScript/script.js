
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const search = document.getElementById("tableSearch");
  if(search){
    search.addEventListener("input", function(){
      const value=this.value.toLowerCase();
      document.querySelectorAll("tbody tr").forEach(row=>{
        row.style.display=row.textContent.toLowerCase().includes(value)?"":"none";
      });
    });
  }

  document.querySelectorAll(".delete-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      if(confirm("هل أنت متأكد من حذف هذا العنصر؟")){
        btn.closest("tr")?.remove();
      }
    });
  });

  document.querySelectorAll("form[data-demo-form]").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      alert("تم حفظ البيانات بنجاح (واجهة تجريبية Frontend).");
      form.reset();
    });
  });
});
