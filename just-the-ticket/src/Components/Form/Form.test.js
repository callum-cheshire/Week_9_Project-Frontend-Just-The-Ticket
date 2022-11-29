import { it, expect, describe, jest } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./";
import Input from "../Input";
import Textarea from "../Textarea";

const userTicket = {
  name: "",
  question: "",
  roomNumber: "",
  problem: "",
  description: "",
  code: "",
  errorLog: "",
};

describe("Form", () => {
  describe("Fields are present and empty", () => {
    it("has an empty form input with the label: Name:", () => {
      const props = {
        label: "Name:",
        htmlName: "name",
        handleChange: jest.fn(),
        value: userTicket.name,
      };
      render(
        <Input
          htmlName={props.htmlName}
          value={props.value}
          label={props.label}
        />
      );

      const inputNode = screen.getByLabelText("Name:");
      expect(inputNode).toBeInTheDocument();
      expect(inputNode).toBeTruthy();
    });

    it("has an empty form input with the label: Ticket Title:", () => {
      const props = {
        label: "Ticket Title:",
        htmlName: "question",
        handleChange: jest.fn(),
        value: userTicket.question,
      };
      render(
        <Input
          htmlName={props.htmlName}
          value={props.value}
          label={props.label}
        />
      );
      const inputNode = screen.getByLabelText("Ticket Title:");
      expect(inputNode).toBeInTheDocument();
      expect(inputNode).toBeTruthy();
    });

    it("has an empty form input with the label: Problem Summary:", () => {
      const props = {
        label: "Problem Summary:",
        htmlName: "problem",
        handleChange: jest.fn(),
        value: userTicket.problem,
      };
      render(
        <Textarea
          htmlName={props.htmlName}
          value={props.value}
          label={props.label}
        />
      );
      const inputNode = screen.getByLabelText("Problem Summary:");
      expect(inputNode).toBeInTheDocument();
      expect(inputNode).toBeTruthy();
    });

    it("has an empty form input with the label: Steps Taken:", () => {
      const props = {
        label: "Steps Taken:",
        htmlName: "description",
        handleChange: jest.fn(),
        value: userTicket.description,
      };
      render(
        <Textarea
          htmlName={props.htmlName}
          value={props.value}
          label={props.label}
        />
      );
      const inputNode = screen.getByLabelText("Steps Taken:");
      expect(inputNode).toBeInTheDocument();
      expect(inputNode).toBeTruthy();
    });

    it("has an empty form input with the label: Code:", () => {
      const props = {
        label: "Code:",
        htmlName: "code",
        handleChange: jest.fn(),
        value: userTicket.code,
      };
      render(
        <Textarea
          htmlName={props.htmlName}
          value={props.value}
          label={props.label}
        />
      );
      const inputNode = screen.getByLabelText("Code:");
      expect(inputNode).toBeInTheDocument();
      expect(inputNode).toBeTruthy();
    });

    it("has an empty form input with the label: Error Logs:", () => {
      const props = {
        label: "Error Logs:",
        htmlName: "errorLog",
        handleChange: jest.fn(),
        value: userTicket.errorLog,
      };
      render(
        <Textarea
          htmlName={props.htmlName}
          value={props.value}
          label={props.label}
        />
      );
      const inputNode = screen.getByLabelText("Error Logs:");
      expect(inputNode).toBeInTheDocument();
      expect(inputNode).toBeTruthy();
    });

    it("has an empty form input with the label: Room:", () => {
      const props = {
        label: "Room:",
        htmlName: "roomNumber",
        handleChange: jest.fn(),
        value: userTicket.roomNumber,
      };
      render(
        <Input
          htmlName={props.htmlName}
          value={props.value}
          label={props.label}
        />
      );
      const inputNode = screen.getByLabelText("Room:");
      expect(inputNode).toBeInTheDocument();
      expect(inputNode).toBeTruthy();
    });

    // failing
    describe("Interactivity", () => {
      it("the user can input their name", async () => {
        const formProps = { setTicket: jest.fn() };
        const inputProps = {
          label: "Name:",
          htmlName: "name",
          handleChange: jest.fn(),
          value: userTicket.name,
        };
        render(
          <Form setTicket={formProps.setTicket}>
            <Input
              htmlName={inputProps.htmlName}
              value={inputProps.value}
              label={inputProps.label}
            />
          </Form>
        );
        const input = screen.getByRole("textbox", { name: "Name:" });
        userEvent.type(input, "Alice");
        expect(input).toHaveValue("Alice");

        const button = screen.getByRole("button");
        userEvent.click(button);
        const userTicketName = {
          name: "Alice",
        };
        expect(formProps.setTicket).toHaveBeenCalledWith(userTicketName);
      });
    });
  });
});
