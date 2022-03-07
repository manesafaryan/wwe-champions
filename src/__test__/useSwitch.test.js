import {expect, test} from "@jest/globals"
import { render, screen } from "@testing-library/react"
import {renderHook} from "@testing-library/react-hooks"
import useSwitch from "../hooks/useSwitch"

test("allows to switch", () => {
    render(<useSwitch />)
    const valueName = screen.getByText(/valueName/i)
    const value = screen.getByText(/value/i)
    const switcher = 
} )