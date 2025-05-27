export class Bd {
    constructor() {
        this.dataDiet = [
            {
                dia: '1',
                plano_alimentar: 'Dieta para ganho de massa',
                refeicoes: ['Café da manhã: Omelete com aveia', 'Almoço: Arroz, feijão, frango grelhado e salada', 'Jantar: Batata doce com atum'],
                cal: 1000,
                check: false,
            },
            {
                dia: '2',
                plano_alimentar: 'Dieta balanceada',
                refeicoes: ['Café da manhã: Iogurte com frutas e granola', 'Almoço: Quinoa, brócolis e filé de peixe', 'Jantar: Sopa de legumes com ovo cozido'],
                cal: 500,
                check: false,
            },
            {
                dia: '3',
                plano_alimentar: 'Dieta para definição muscular',
                refeicoes: ['Café da manhã: Vitamina de banana com whey', 'Almoço: Arroz integral, peito de frango e legumes', 'Jantar: Salada de folhas verdes com ovo e abacate'],
                cal: 50,
                check: false,
            },
        ];

        this.dataTrain = [
            {
                dia: '1',
                grupo_muscular: 'Costas e Bíceps',
                day_train: ['Puxada na barra', 'Remada curvada', 'Rosca direta'],
                cal: 1000,
                check: false,
            },
            {
                dia: '2',
                grupo_muscular: 'Peito e Tríceps',
                day_train: ['Supino reto', 'Tríceps pulley', 'Flexão de braço'],
                cal: 1500,
                check: false,
            },
            {
                dia: '3',
                grupo_muscular: 'Pernas e Ombros',
                day_train: ['Agachamento', 'Desenvolvimento com halteres', 'Elevação lateral'],
                cal: 2000,
                check: false,
            },
        ];

        this.resultsLastMonth = {
            "calories_burned": 0,
            "calories_consumed": 0,
            calories_total() {
                return this.calories_burned - this.calories_consumed
            },
        }

        this.resultsToday = {
            "calories_burned": 0,
            "calories_consumed": 0,
            calories_total() {
                return this.calories_consumed - this.calories_burned
            },
        }
    }
};

export const bd = new Bd();