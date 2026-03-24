const issues = [
  {
    component: 'Input required',
    browserAt: 'Chrome + TalkBack 15 (Android)',
    issue: 'Does not announce required.',
    resolution: {
      text: 'Verified fixed as of Chrome 138 + TalkBack 16.2. Fixed TalkBack-side ~Sep 30 2025',
      href: 'https://issues.chromium.org/issues/355271551',
      label: 'Chromium #355271551',
    },
    status: 'resolved',
    tickets: [
      { text: '#5842', href: 'https://github.com/cds-snc/platform-forms-client/issues/5842' },
      { text: '#5845', href: 'https://github.com/cds-snc/platform-forms-client/issues/5845' },
    ],
  },
  {
    component: 'Input number',
    browserAt: 'All browsers (mouse/touch users)',
    issue: 'Increment/decrement spinner buttons are hidden by CSS, preventing pointer users from adjusting the value with the controls.',
    status: 'open',
    tickets: [
      { text: '#1011', href: 'https://github.com/cds-snc/gcds-components/issues/1011' },
    ],
  },
  {
    component: 'Labeled form inputs',
    browserAt: 'Chrome + TalkBack (Android)',
    issue: 'TalkBack announces the label text twice — once from the <label> element associated via htmlFor/id, and again from the label\'s text content being picked up as adjacent text.',
    status: 'open',
    tickets: [
      { text: 'crbug.com/1188511', href: 'https://crbug.com/1188511' },
    ],
  },
]

export default function KnownIssuesTable() {
  return (
    <section className="section">
      <h2 className="section__heading">Known Form Accessibility Issues</h2>
      <div className="known-issues-wrapper">
        <table className="known-issues-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Browser / AT</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, i) => (
              <tr key={i}>
                <td>{issue.component}</td>
                <td>{issue.browserAt}</td>
                <td>
                  {issue.issue}
                  {issue.resolution && (
                    <>
                      <br />
                      <span className="known-issues-table__resolution">
                        {issue.resolution.text} (
                        <a href={issue.resolution.href} target="_blank" rel="noreferrer">
                          {issue.resolution.label}
                        </a>
                        ).
                      </span>
                    </>
                  )}
                </td>
                <td>
                  <span className={`known-issues-table__status known-issues-table__status--${issue.status}`}>
                    {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                  </span>
                </td>
                <td>
                  {issue.tickets.map((ticket, j) => (
                    <span key={j}>
                      {j > 0 && ' '}
                      <a href={ticket.href} target="_blank" rel="noreferrer">{ticket.text}</a>
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
