/**
 * IssueTable — right-column panel for each component example.
 *
 * issues: Array<{ combo: string, description: string, tickets?: Array<{ text: string, href: string }> }>
 *   combo       — browser + AT combination (e.g. "Chrome 120 + NVDA 2023.3")
 *   description — plain-text description of the issue
 *   tickets     — optional GitHub issue links
 */
export default function IssueTable({ issues = [] }) {
  return (
    <aside className="example__issues">
      <p className="example__issues-heading">Known issues</p>
      {issues.length === 0 ? (
        <p className="example__issues-empty">No known issues.</p>
      ) : (
        <table className="issues-table">
          <thead>
            <tr>
              <th>Browser + AT</th>
              <th>Issue</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, i) => (
              <tr key={i}>
                <td>{issue.combo}</td>
                <td>{issue.description}</td>
                <td className="issues-table__tickets">
                  {issue.tickets?.map((ticket, j) => (
                    <a
                      key={j}
                      href={ticket.href}
                      target="_blank"
                      rel="noreferrer"
                      className="issues-table__ticket-link"
                    >
                      {ticket.text}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </aside>
  )
}
