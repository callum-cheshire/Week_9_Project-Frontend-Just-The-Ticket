import { it, expect, describe, jest } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Form from './'

describe ("Form", ()=> {
  describe("Fields are present and empty", ()=> {
    it('has an empty form input with the label: Name', () => {
      render(<Form />);
      const inputNode = screen.getByLabelText("Name:")
      expect(inputNode).toBeInTheDocument()
      expect(inputNode).toBeTruthy()
    })

    it('has an empty form input with the label: Ticket Title', () => {
      render(<Form />);
      const inputNode = screen.getByLabelText("Ticket Title:")
      expect(inputNode).toBeInTheDocument()
      expect(inputNode).toBeTruthy()
    })

    it('has an empty form input with the label: Problem Summary', () => {
      render(<Form />);
      const inputNode = screen.getByLabelText("Problem Summary:")
      expect(inputNode).toBeInTheDocument()
      expect(inputNode).toBeTruthy()
    })

    it('has an empty form input with the label: Steps Taken:', () => {
      render(<Form />);
      const inputNode = screen.getByLabelText("Steps Taken:")
      expect(inputNode).toBeInTheDocument()
      expect(inputNode).toBeTruthy()
    })

    it('has an empty form input with the label: Code:', () => {
      render(<Form />);
      const inputNode = screen.getByLabelText("Code:")
      expect(inputNode).toBeInTheDocument()
      expect(inputNode).toBeTruthy()
    })

    it('has an empty form input with the label: Error Logs:', () => {
      render(<Form />);
      const inputNode = screen.getByLabelText("Error Logs:")
      expect(inputNode).toBeInTheDocument()
      expect(inputNode).toBeTruthy()
    })

    it('has an empty form input with the label: Room', () => {
      render(<Form />);
      const inputNode = screen.getByLabelText("Room:")
      expect(inputNode).toBeInTheDocument()
      expect(inputNode).toBeTruthy()
    })

  describe("Interactivity", ()=> {

    it("the user can input their name", async ()=> {
      const props = { setTicket: jest.fn() }
      render(<Form setTicket={props.setTicket} />);
      const input = screen.getByRole('textbox', { name: 'Name:'} )
	    userEvent.type(input, 'Alice')	
	    expect(input).toHaveValue('Alice')

      const button = screen.getByRole('button')
      userEvent.click(button)
      const userTicket = {
        name: "Alice"
      }
      expect(props.setTicket).toHaveBeenCalledWith(userTicket)
    
    })
  })  
  })
})


