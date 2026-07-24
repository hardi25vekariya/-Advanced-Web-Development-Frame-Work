import { useState } from "react";

function RepoList({ repos }) {
    const [searchQuery, setSearchQuery] = useState("");

    // Case-insensitive filtering of repositories
    const filteredRepos = repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>GitHub Repositories</h2>
            
            {/* Search Input for Repositories */}
            <div className="search-container" style={{ marginBottom: "25px", textAlign: "center" }}>
                <input
                    type="text"
                    className="repo-search-input"
                    placeholder="Search Repository..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Render Filtered Repositories */}
            {filteredRepos.length > 0 ? (
                filteredRepos.map((repo) => (
                    <div
                        key={repo.id}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "8px"
                        }}
                    >
                        <h3>
                            {repo.name} <span className="repo-stars">⭐ {repo.stargazers_count}</span>
                        </h3>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {repo.html_url}
                        </a>
                    </div>
                ))
            ) : (
                <p style={{ textAlign: "center", color: "gray" }}>
                    No repositories found matching "{searchQuery}"
                </p>
            )}
        </div>
    );
}

export default RepoList;