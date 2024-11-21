// Sample data
const leaderboardData = [
    { rank: 1, name: "John Doe", sport: "Basketball", coach: "Coach A", score: 98 },
    { rank: 2, name: "Jane Smith", sport: "Soccer", coach: "Coach B", score: 92 },
    { rank: 3, name: "Emily Johnson", sport: "Tennis", coach: "Coach C", score: 90 },
    { rank: 4, name: "Michael Brown", sport: "Basketball", coach: "Coach D", score: 85 },
    { rank: 5, name: "Chris Lee", sport: "Cricket", coach: "Coach E", score: 80 },
    { rank: 6, name: "Sarah Green", sport: "Soccer", coach: "Coach F", score: 75 },
    { rank: 7, name: "David Clark", sport: "Tennis", coach: "Coach G", score: 70 },
    { rank: 8, name: "Anna White", sport: "Cricket", coach: "Coach H", score: 65 },
];

// Function to display the leaderboard
function displayLeaderboard(sport = "all") {
    const tableBody = document.querySelector("#leaderboard-list");
    tableBody.innerHTML = ""; // Clear the current leaderboard data

    const filteredData = sport === "all" ? leaderboardData : leaderboardData.filter(item => item.sport === sport);

    filteredData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.rank}</td>
            <td>${item.name}</td>
            <td>${item.sport}</td>
            <td>${item.coach}</td>
            <td>${item.score}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Event listener to filter leaderboard based on selected sport
document.querySelector("#filter-sport").addEventListener("change", (e) => {
    displayLeaderboard(e.target.value);
});

// Initial display of leaderboard with all sports
displayLeaderboard();
