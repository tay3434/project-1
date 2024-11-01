import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-search2.js";

describe("nasaSearch2 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-search2
        title="title"
      ></nasa-search2>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
