import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from "./SignIn";

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args:{},
    argTypes:{},
    parameters:{
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Logged in successfully!'
                    }))
                })
            ],
        },
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('johndoe@exemple.com'), 'gustavobatista@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('********'), '312412')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Logged in successfully!')).toBeInTheDocument()
        })
    }
}