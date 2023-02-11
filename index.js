const root = document.getElementById("root");
const uri = "https://fakestoreapi.com/products";

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

const getProducts = async () => {
  const res = await fetch(uri);
  const data = await res.json();
  console.log(data);

  let template = "";
  data?.map((product) => {
    template += `
            <div class="card m-2 p-3" style="width: 18rem; height:30rem">
                    <img src=${product.image} class="card-img-top img-fluid w-100 height object-fit-contain mb-2" style="height:8rem ;" alt="...">
                    <div class="card-body pt-2">
                        <h5 class="card-title fs-5 mt-5">${product.title}</h5>                     
                        <p class="card-text fw-bold fs-3 my-2">$ ${product.price}</p>
                        <a href="#" class="btn btn-warning w-100 mt-4">Add to Cart</a>
                    </div>
                </div>
            `;
  });

  root.innerHTML = template;
};

getProducts();
