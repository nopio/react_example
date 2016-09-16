var EventTable = React.createClass({
  handleDeleteRecord: function(event) {
    this.props.handleDeleteRecord(event);
  },
  handleUpdateRecord: function(old_event, event) {
    this.props.handleUpdateRecord(old_event, event);
  },
  render: function() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
                         key={'event' + event.id}
                         handleDeleteRecord={this.handleDeleteRecord}
                         handleUpdateRecord={this.handleUpdateRecord} />)
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
