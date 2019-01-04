const contentNode = document.getElementById('contents');
// const continents = ['Africa', 'Amarica', 'Asia', 'Australia', 'Europe'];
// const message = continents.map(c => `Hello ${c}!`).join(' ');
//
// const component = <p>{message}</p>;
// ReactDOM.render(component, contentNode);
class IssueList extends React.Component {
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable/>
        <hr />
        <IssueAdd/>
      </div>
    );
  }
}

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const borderedStyle = {border: "1px solid silver", padding: 6};
    return (
      <table style={{borderCollapase: "collapase"}}>
        <thead>
          <tr>
            <th style={borderedStyle}>Id</th>
            <th style={borderedStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow issue_id={1}
           issue_title="Error in console when clicking add" />
           <IssueRow issue_id={2}
             issue_title="Missing bottom border on panel" />
        </tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue add.</div>
    );
  }
}

class IssueRow extends React.Component {
  // IssueRow.propTypes = {
  //   issue_id: React.propTypes.number.isRequired,
  //   issue_title: React.propTypes.string
  // };
  // IssueRow.defaultProps = {
  //   issue_title: '-- no title --'
  // };
  render() {
    const borderedStyle = {border: "1px solid silver", padding: 4};
    return (
      <tr>
        <th style={borderedStyle}>{this.props.issue_id}</th>
        <th style={borderedStyle}>{this.props.issue_title}</th>
      </tr>
    )
  }
}
ReactDOM.render(<IssueList />, contentNode);
