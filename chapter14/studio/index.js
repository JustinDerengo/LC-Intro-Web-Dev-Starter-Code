let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["LC101", "LC202", "LC303"],
    launchOutput: function(n) {
        if (n % 2 === 0 && !(n % 3 === 0) && !(n % 5 === 0)) {
            return "Launch!";
        } else if (!(n % 2 === 0) && n % 3 === 0 && !(n % 5 === 0)) {
            return "Code!";
        } else if (!(n % 2 === 0) && !(n % 3 === 0) && n % 5 === 0) {
            return "Rocks!";
        } else if (n % 2 === 0 && n % 3 === 0 && !(n % 5 === 0)) {
            return "LaunchCode!";
        } else if (!(n % 2 === 0) && n % 3 === 0 && n % 5 === 0) {
            return "Code Rocks!";
        } else if (n % 2 === 0 && !(n % 3 === 0) && n % 5 === 0) {
            return "Launch Rocks!";
        } else if (n % 2 === 0 && n % 3 === 0 && n % 5 === 0) {
            return "LaunchCode Rocks!";
        } else {
            return "Rutabagas! That doesn't work."
        }
    }
  
}



module.exports = launchcode;

