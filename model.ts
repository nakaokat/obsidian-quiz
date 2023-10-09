// クイズ（暗記のための問題）のモデル


// --- types ---

// answer type: string
type answer = string;
// question type: string
type question = string;
// quiz type: product type of question and answer
type quiz = {
	question: question;
	answer: answer;
}

// 選択問題
// 複数の選択肢と、１つの正解を持つ
// multiple choice question
type choice = string
type mcq = {
	question: question;
	answer: answer;
	choices: choice[];
}

export type {quiz, mcq};
