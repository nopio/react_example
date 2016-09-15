var EventTable = React.createClass({
  handleDeleteRecord: function(event) {
    this.props.handleDeleteRecord(event);
  },
  render: function() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
                         key={'event' + event.id}
                         handleDeleteRecord={this.handleDeleteRecord} />)
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2">Name</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-3">Place</th>
            <th className="col-md-3">Description</th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
});
