// Fictional, fixed teaching example; these are not trained models.
window.example = { customer: { tenure: 2, contract: "month-to-month", charge: 70 }, tree: "Leave", forestVotes: ["Stay", "Leave", "Stay", "Leave", "Stay"] };
window.majority = function (votes) {
  const stay = votes.filter(v => v === "Stay").length;
  const leave = votes.filter(v => v === "Leave").length;
  if (stay === leave) throw new Error("No majority");
  return stay > leave ? "Stay" : "Leave";
};
