import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Index from "@/routes";

describe("routes/index 테스팅", () => {
  vi.mock("@remix-run/react", async () => {
    let remix = await vi.importActual("@remix-run/react");
    return {
      remix,
      Link: vi.fn(),
      useLoaderData: vi.fn().mockReturnValue({}),
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("routes/index 렌더링", () => {
    render(<Index />);
    const mustTrue = screen.getByText("테스팅 사이트");
    expect(mustTrue).toBeTruthy();
  });

  it("무조건 실패", () => {
    render(<Index />);

    const mustTrue = screen.queryByText("없는값123232323");
    expect(mustTrue).toBeNull();
  });
});
