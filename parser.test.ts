import { sourceToQuiz, sourceToMCQ } from "./parser";
import { describe, expect, it, test } from "@jest/globals";

describe("sourceToQuiz", () => {
	const cases = [
		// ---(ハイフン3つ)で分割できる
		{
			"source": "What is the capital of France?\n---\nParis",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris"
			},
			"comment": "改行と---で分割できる"
		},
		{
			"source": "What is the capital of France?\n---\nParis\n---\n",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris"
			},
			"comment": "---で終わってもOK"
		},
		// ハイフンの数が4つ以上の場合も分割できる
		{
			"source": "What is the capital of France?\n----\nParis",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris"
			},
		}
	]

	test.each(cases)("正常系 %p", (c) => {
		const actual = sourceToQuiz(c.source);
		expect(actual).toEqual(c.expected);
	});
});


describe("sourceToMCQ", () => {
	const cases = [
		{
			"source": "What is the capital of France?\n---\nParis\n---\nParis\nTokyo\nNew York",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris",
				"choices": ["Paris", "Tokyo", "New York"]
			},
			"comment": "3つの選択肢がある場合"
		},
		{
			"source": "What is the capital of France?\n---\nParis\n---\nParis\nTokyo\nNew York\nLondon",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris",
				"choices": ["Paris", "Tokyo", "New York", "London"]
			},
			"comment": "4つの選択肢がある場合"
		},
		{
			"source": "What is the capital of France?\n---\nParis\n---\nParis\n",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris",
				"choices": ["Paris"]
			},
			"comment": "1つの選択肢がある場合"
		},
		{
			"source": "What is the capital of France?\n----\nParis\n-----\nParis\nTokyo\nNew York",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris",
				"choices": ["Paris", "Tokyo", "New York"]
			},
			"comment": "ハイフンが4つ以上の場合も分割できる"
		},
	]

	test.each(cases)("正常系 %p", (c) => {
		const actual = sourceToMCQ(c.source);
		expect(actual).toEqual(c.expected);
	});
});
