function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button className="btn btn-success kg-btn" >Add</button>
        </div>
      </div>
    </div>
  )
};

export default AddTodo;