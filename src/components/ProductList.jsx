export default function ProductList({ product }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={`/${product.image}`} width="100%" height="225" />
        <title>{product.name}</title>
        {/* <rect width="100%" height="100%" fill="#55595c"></rect> */}
        {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">{product.description}</text> */}
        <div class="card-body">
          <p>{product.name}</p>
          <p class="card-text">{product.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Add to Chart</button>
            </div>
            <small class="text-body-secondary">10 <span>pieces</span></small>
          </div>
        </div>
      </div>
    </div>
  )

}
