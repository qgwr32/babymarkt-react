/// 1
// Die showAlert Funktion soll 'success', 'error' und 'info' alerts unterstützen
function showAlert(message: string, type: "success" | "error" | "info") {}

showAlert("Ein Erfolg", "success");
showAlert("Ein Fehler", "error");
showAlert("Eine Info", "info");

/// 2
// Die Funktion soll Arrays aus numbers und strings loggen können.
function logArray(array: number[] | string[]) {}
// Alternative
// function logArray(array: Array<number> | Array<string>) {}

logArray([1, 2, 3, 4, 5]);
logArray(["1", "2", "3", "4", "5"]);

export {};

/// 3

// Erstelle einen type Theme den alle Funktionen nutzen.
// Erweitere diesen type nun um das Theme 'gray'.

type Theme = "ligth" | "dark" | "gray";

function renderButton(theme: Theme) {}
function renderHeader(theme: Theme) {}
function renderFooter(theme: Theme) {}
