// En es11 se añade la posibilidad de importar módulos de forma dinámica. Para ello se utiliza la función import() que devuelve una promesa que se resuelve con el módulo importado, solo ahí se carga y ocupa red

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
	const module = await import("./module.js");
	console.log(module);
    module.hello();
});
