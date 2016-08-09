var NewForm = React.createClass({
  handleAdd: function(e) {
    e.preventDefault();
    var name = ReactDOM.findDOMNode(this.refs.name);
    var place = ReactDOM.findDOMNode(this.refs.place);
    var event_date = ReactDOM.findDOMNode(this.refs.event_date);
    var description = ReactDOM.findDOMNode(this.refs.description);
    var self = this;
    if (!!name && !!place && !!event_date && !!description) {
      $.ajax({
        url: '/api/events',
        method: 'POST',
        data: { event: { name: name.value,
                         place: place.value,
                         event_date: event_date.value,
                         description: description.value
                       }},
        success: function(data) {
          self.props.handleAdd(data);
          name.value = '';
          place.value = '';
          event_date.value = '';
          description.value = '';
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },
  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="name"
                 placeholder="Name"
                 ref="name" />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="place"
                 placeholder="Place"
                 ref="place" />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="event_date"
                 placeholder="Event date"
                 ref="event_date" />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="description"
                 placeholder="Description"
                 ref="description" />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
});
