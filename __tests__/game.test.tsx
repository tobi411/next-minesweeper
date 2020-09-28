import React from 'react'
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import Game from "../components/game";
import Board from "../components/board";
import Index from "./../pages/index";
import wrappedRender from "./../utils/testUtils";
import { useSelector, useDispatch } from 'react-redux';
import { IGameState } from "./../types/game";
import GameBoard from './../domain/gameBoard';
import config, { IConfig } from '../config/config';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const mockUseSelector = useSelector as jest.Mock;
const mockUseDispatch = useDispatch as jest.Mock;
const mockDispatch = jest.fn();

let initialState: IGameState;
let gameBoard: GameBoard;

const Div: React.ComponentType = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

describe('<Index />', () => {
    beforeEach(() => {
        mockUseSelector.mockImplementation(callback => {
            return callback({
                gameState: {
                    name: "Tobi"
                }
            });
        });
        mockUseDispatch.mockImplementation(() => mockDispatch);
    });
    afterEach(() => {
        useSelector.mockClear();
        useDispatch.mockClear();
    });
    it('It should update the game state when the component is mounted', async () => {
        wrappedRender(<Index />, {
            wrapper: Div
        })

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockUseSelector).toHaveBeenCalledTimes(1);
    })
})


describe('<Game/>', () => {
    beforeEach(() => {
        initialState = {
            name: "Tobi Kehinde",
            gameOver: false,
            gameWon: false,
            difficulty: 'medium',
            timer: 0,
            numFlagged: 0,
            numMoves: 0,
            gameBoard: null,
        };
    })
    it('should not render if the game state is not available', () => {
        const { queryAllByTestId } = render(<Game data={null} />);

        const gameBoard = queryAllByTestId("game-block");

        expect(gameBoard.length).toEqual(0);
    })

    it('should not render if game state is available but the game board is not', () => {

        const { queryAllByTestId } = render(<Game data={initialState} />);

        const gameBoard = queryAllByTestId("game-block");

        expect(gameBoard.length).toEqual(0);
    })

    it('should let the user know when the game is won', () => {
        initialState.gameWon = true;
        initialState.gameBoard = { cells: [] };

        const { getByTestId } = render(<Game data={initialState} />);

        const gameMessage = getByTestId("game-msg");

        expect(gameMessage).toHaveTextContent("Congratulations! You've won the game!!");
    })

    it('should let the user know when the game is lost', () => {
        initialState.gameOver = true;
        initialState.gameBoard = { cells: [] };

        const { getByTestId } = render(<Game data={initialState} />);

        const gameMessage = getByTestId("game-msg");

        expect(gameMessage).toHaveTextContent("Game Over. You stepped on a mine");
    })
})