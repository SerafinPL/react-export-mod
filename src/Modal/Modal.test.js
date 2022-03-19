import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

import userEvent from "@testing-library/user-event";

describe(" <Modal /> Component! ", () => {
  test("renders Label Texts", () => {
    // Arrage
    render(<Modal />);
    //ACT

    //Assert
    const exportTextElement = screen.getByText("Export Report");
    expect(exportTextElement).toBeInTheDocument();

    const exportTextReportName = screen.getByText("Report Name");
    expect(exportTextReportName).toBeInTheDocument();

    const exportTextFormat = screen.getByText("Format");
    expect(exportTextFormat).toBeInTheDocument();

    const exportTextSchedule = screen.getByText("Schedule");
    expect(exportTextSchedule).toBeInTheDocument();
  });

  test("renders LAbels for wTextAreas and radiobutton", () => {
    // Arrage
    render(<Modal />);
    //ACT

    //Assert
    const exportTextExcel = screen.getByLabelText("Excel");
    expect(exportTextExcel).toBeInTheDocument();

    const exportTextCSV = screen.getByLabelText("CSV");
    expect(exportTextCSV).toBeInTheDocument();

    const exportTextNoRepeat = screen.getByLabelText("No Repeat");
    expect(exportTextNoRepeat).toBeInTheDocument();

    const exportTextSpecificDate = screen.getByLabelText("Specific Date");
    expect(exportTextSpecificDate).toBeInTheDocument();

    const exportTextDaily = screen.getByLabelText("Daily");
    expect(exportTextDaily).toBeInTheDocument();

    const exportTextWeekly = screen.getByLabelText("Weekly");
    expect(exportTextWeekly).toBeInTheDocument();
  });

  test("change content to Date", () => {
    // Arrage
    render(<Modal />);
    //ACT
    const exportTextSpecificDate = screen.getByLabelText("Specific Date");
    expect(exportTextSpecificDate).toBeInTheDocument();
    userEvent.click(exportTextSpecificDate);

    //Assert
    const ItIsNotBad = screen.getByText("Date");
    expect(ItIsNotBad).toBeInTheDocument();
  });

  test("change content to Daily", () => {
    // Arrage
    render(<Modal />);
    //ACT
    const exportTextDaily = screen.getByLabelText("Daily");
    expect(exportTextDaily).toBeInTheDocument();
    userEvent.click(exportTextDaily);

    //Assert
    const ItIsEveryday = screen.getByText("Everyday at");
    expect(ItIsEveryday).toBeInTheDocument();
  });

  test("change content to Weekly", () => {
    // Arrage
    render(<Modal />);
    //ACT
    const exportTextWeekly = screen.getByLabelText("Weekly");
    expect(exportTextWeekly).toBeInTheDocument();
    userEvent.click(exportTextWeekly);

    //Assert
    const ItIsEvery = screen.getByText("Every");
    expect(ItIsEvery).toBeInTheDocument();
  });

  
});
