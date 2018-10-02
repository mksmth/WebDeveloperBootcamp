var lis = document.querySelectorAll("li");
// OR USE: document.querySelectorAll("li").forEach(function(li) {



lis.forEach(function(li) {
	li.addEventListener("mouseover", function(){
		this.classList.add("selected");
  });


	li.addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	li.addEventListener("click", function(){
		this.classList.toggle("done");
	});

  });