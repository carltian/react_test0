const contentNode = document.getElementById('contents');
// const continents = ['Africa', 'Amarica', 'Asia', 'Australia', 'Europe'];
// const message = continents.map(c => `Hello ${c}!`).join(' ');
//
// const component = <p>{message}</p>;
// ReactDOM.render(component, contentNode);
class IssueList extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Issue Tracker"
      ),
      React.createElement(IssueFilter, null),
      React.createElement("hr", null),
      React.createElement(IssueTable, null),
      React.createElement("hr", null),
      React.createElement(IssueAdd, null)
    );
  }
}

class IssueFilter extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "This is a placeholder for the issue filter."
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const borderedStyle = { border: "1px solid silver", padding: 6 };
    return React.createElement(
      "table",
      { style: { borderCollapase: "collapase" } },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { style: borderedStyle },
            "Id"
          ),
          React.createElement(
            "th",
            { style: borderedStyle },
            "Title"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(IssueRow, { issue_id: 1,
          issue_title: "Error in console when clicking add" }),
        React.createElement(IssueRow, { issue_id: 2,
          issue_title: "Missing bottom border on panel" })
      )
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "This is a placeholder for the issue add."
    );
  }
}
// IssueRow.propTypes = {
//   issue_id: React.propTypes.number.isRequired,
//   issue_title: React.propTypes.string
// };
// IssueRow.defaultProps = {
//   issue_title: '-- no title --'
// };
class IssueRow extends React.Component {
  render() {
    const borderedStyle = { border: "1px solid silver", padding: 4 };
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        { style: borderedStyle },
        this.props.issue_id
      ),
      React.createElement(
        "th",
        { style: borderedStyle },
        this.props.issue_title
      )
    );
  }
}
ReactDOM.render(React.createElement(IssueList, null), contentNode);