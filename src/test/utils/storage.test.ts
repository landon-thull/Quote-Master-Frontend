import {describe, expect, it} from "vitest";

import storage from "@/utils/storage.ts";

// key in local storage
const QUOTE_MASTER_TOKEN = "quote_master_token";

describe("setToken", () => {

  storage.setToken("token");
  const localStorageItem = localStorage.getItem(QUOTE_MASTER_TOKEN);

  it("Saves token to local storage", () => {
    expect(localStorageItem).not.toBeNull();

    if (localStorageItem) {
      expect(JSON.parse(localStorageItem)).toEqual("Bearer token");
    }
  });

  it("Prepends 'Bearer ' to supplied token", () => {
    expect(localStorageItem).not.toBeNull();

    if (localStorageItem) {
      expect(JSON.parse(localStorageItem).slice(0, 7)).toEqual("Bearer ");
    }
  });
});


describe("getToken", () => {
  localStorage.setItem(QUOTE_MASTER_TOKEN, JSON.stringify("Bearer token2"));

  const token = storage.getToken();

  it("Retrieves token from local storage", () => {
    expect(token).toEqual("Bearer token2");
  });
});


describe("clearToken", () => {
  localStorage.setItem(QUOTE_MASTER_TOKEN, JSON.stringify("Bearer token3"));

  const token = localStorage.getItem(QUOTE_MASTER_TOKEN);

  it("Initial token set", () => {
    expect(token).not.toBeNull();
  });

  storage.clearToken();

  it("Clears token from local storage", () => {
    expect(localStorage.getItem(QUOTE_MASTER_TOKEN)).toBeNull();
  })
})