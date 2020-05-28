const choices = [
    {
        name: "Lockdown",
        content: "Lock down the entire country",
        results: {
            wealth: -10,
            health: 5,
            happiness: -5,
            approval: -5
        },
        questions: [
            {
                question: "Won't many healthy people feel unfairly targeted by this lockdown?",
                choices: [
                    "Everybody is at risk.",
                    "Everybody does their part"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 2,
                        happiness: -1,
                        approval: -1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 2,
                        approval: 2
                    }
                ]
            },
            {
                question: "What will homeless people do",
                choices: [
                    "They're exempt",
                    "We'll get them homes"
                ],
                results: [
                    {
                        wealth: 0,
                        health: -2,
                        happiness: -3,
                        approval: -3
                    },
                    {
                        wealth: -5,
                        health: 0,
                        happiness: 3,
                        approval: 3
                    }
                ]
            }
        ]
        
    },
    {
        name: "Distribute Ventilators",
        content: "Give the ventilators to states that need them",
        results: {
            wealth: -10,
            health: 10,
            happiness: 5,
            approval: 5
        },
        questions: [
            {
                question: "Who is going to pay for these?",
                choices: [
                    "You are.",
                    "Taxpayers, of course"
                ],
                results: [
                    {
                        wealth: 1,
                        health: 0,
                        happiness: -1,
                        approval: 0
                    },
                    {
                        wealth: 1,
                        health: 0,
                        happiness: 1,
                        approval: 1
                    }
                ]
            },
            {
                question: "Where are we going to get ventilators?",
                choices: [
                    "You'll make them",
                    "We'll convert car factories"
                ],
                results: [
                    {
                        wealth: 5,
                        health: -1,
                        happiness: -3,
                        approval: -4
                    },
                    {
                        wealth: -2,
                        health: 3,
                        happiness: 0,
                        approval: 2
                    }
                ]
            }
        ]
        
    },
    {
        name: "Stop all flights",
        content: "Stop all aviation into your country",
        results: {
            wealth: -5,
            health: 5,
            happiness: -2,
            approval: 2
        },
        questions: [
            {
                question: "What about people who are abroad?",
                choices: [
                    "No flights means no flights",
                    "Bring them back"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 2,
                        happiness: -1,
                        approval: 0
                    },
                    {
                        wealth: 0,
                        health: -1,
                        happiness: 0,
                        approval: 0
                    }
                ]
            },
            {
                question: "Can I take a last minute flight?",
                choices: [
                    "No. You stay",
                    "Where's your passport?"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 1,
                        happiness: -1,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 1,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Relief Checks",
        content: "Compensate your citizens",
        results: {
            wealth: -10,
            health: 3,
            happiness: 5,
            approval: 3
        },
        questions: [
            {
                question: "Why do I have to pay for someone else's paycheck?",
                choices: [
                    "You're fired.",
                    "Just one step closer to my socialist utopia."
                ],
                results: [
                    {
                        wealth: 1,
                        health: 0,
                        happiness: -1,
                        approval: -1
                    },
                    {
                        wealth: 3,
                        health: 0,
                        happiness: 1,
                        approval: 1
                    }
                ]
            },
            {
                question: "Can I get more money?",
                choices: [
                    "No",
                    "Sure. You'll get double"
                ],
                results: [
                    {
                        wealth: 1,
                        health: 0,
                        happiness: -1,
                        approval: 1
                    },
                    {
                        wealth: -1,
                        health: 0,
                        happiness: 1,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Run public health ads",
        content: "Keep your citizens informed on how to stay safe",
        results: {
            wealth: -1,
            health: 4,
            happiness: 0,
            approval: 1
        },
        questions: [
            {
                question: "What about people who use adblock?",
                choices: [
                    "COMMUNIST",
                    "What about them?"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 2,
                        approval: 2
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    }
                ]
            },
            {
                question: "What if people don't see them?",
                choices: [
                    "They will",
                    "Too bad for them"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 1,
                        happiness: 0,
                        approval: 1
                    },
                    {
                        wealth: 1,
                        health: -1,
                        happiness: 0,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Meet with the experts",
        content: "The scientists and public health officials have something to say",
        results: {
            wealth: 3,
            health: 3,
            happiness: 5,
            approval: 5
        },
        questions: [
            {
                question: "Who are the experts?",
                choices: [
                    "the illumintati",
                    "professionals"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 3,
                        happiness: -2,
                        approval: -2
                    },
                    {
                        wealth: 0,
                        health: 2,
                        happiness: 1,
                        approval: 1
                    }
                ]
            },
            {
                question: "Scientists don't exist, you know.",
                choices: [
                    "Yes they do",
                    "You're fired"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 2,
                        happiness: 1,
                        approval: 1
                    },
                    {
                        wealth: -1,
                        health: -1,
                        happiness: 1,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "State Loans",
        content: "The states are asking you for money. Do you give it to them?",
        results: {
            wealth: -5,
            health: 2,
            happiness: 1,
            approval: 0
        },
        questions: [
            {
                question: "If the states failed to budget properly, why should we bail them out?",
                choices: [
                    "We are in a crisis",
                    "I just love wasting money"
                ],
                results: [
                    {
                        wealth: -2,
                        health: 3,
                        happiness: 1,
                        approval: 1
                    },
                    {
                        wealth: -2,
                        health: 0,
                        happiness: -1,
                        approval: -1
                    }
                ]
            },
            {
                question: "Do all states get the same amount of money?",
                choices: [
                    "Yes. equality for all.",
                    "No, states that need more get more."
                ],
                results: [
                    {
                        wealth: -1,
                        health: -1,
                        happiness: 1,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 1,
                        happiness: 1,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Kill the infected",
        content: "Kill all of the infected patients to stop the spread.",
        results: {
            wealth: 0,
            health: 10,
            happiness: -5,
            approval: -25
        },
        questions: [
            {
                question: "How effective will this plan be, exactly.",
                choices: [
                    "Over 9000!",
                    "Dead humans = no virus"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -5,
                        approval: -5
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -5,
                        approval: -5
                    }
                ]
            },
            {
                question: "So if I get infected, do I die? *cough*",
                choices: [
                    "Yes",
                    "Kill him, he's sick!"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 1,
                        happiness: 1,
                        approval: 1
                    },
                    {
                        wealth: -1,
                        health: 2,
                        happiness: -1,
                        approval: -2
                    }
                ]
            }
        ]
        
    },
    {
        name: "Partial Reopening",
        content: "Only let the healthy and young through",
        results: {
            wealth: 10,
            health: -2,
            happiness: 5,
            approval: 5
        },
        questions: [
            {
                question: "What counts as young?",
                choices: [
                    "Not you.",
                    "40 and lower"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 2,
                        happiness: -1,
                        approval: -1
                    },
                    {
                        wealth: 0,
                        health: 3,
                        happiness: 1,
                        approval: 1
                    }
                ]
            },
            {
                question: "Can old people be healthy?",
                choices: [
                    "No, all old people are sick",
                    "Sometimes"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 1,
                        happiness: -1,
                        approval: 1
                    },
                    {
                        wealth: 1,
                        health: -1,
                        happiness: 1,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Full Reopening",
        content: "\"A return to normalcy.\"",
        results: {
            wealth: 15,
            health: -10,
            happiness: -2,
            approval: -3
        },
        questions: [
            {
                question: "Even sick people?",
                choices: [
                    "Yes",
                    "They'll stay in hospitals"
                ],
                results: [
                    {
                        wealth: 2,
                        health: -1,
                        happiness: 1,
                        approval: -1
                    },
                    {
                        wealth: -1,
                        health: 1,
                        happiness: -1,
                        approval: 1
                    }
                ]
            },
            {
                question: "Are we opening our borders, too?",
                choices: [
                    "Are you stupid? It's a full reopening.",
                    "No"
                ],
                results: [
                    {
                        wealth: 1,
                        health: -1,
                        happiness: 1,
                        approval: -1
                    },
                    {
                        wealth: -1,
                        health: 1,
                        happiness: -1,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Sponsor a vaccine",
        content: "Pay companies to do research into a vaccine",
        results: {
            wealth: -5,
            health: 10,
            happiness: 5,
            approval: 5
        },
        questions: [
            {
                question: "Why don't you just make a vaccine?",
                choices: [
                    "I'm the president, not some random researcher",
                    "Actually, now that you say that..."
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 1,
                        approval: -1
                    },
                    {
                        wealth: 2,
                        health: 2,
                        happiness: -1,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Kill everyone",
        content: "If everyone is dead, no one can get infected!",
        results: {
            wealth: -100,
            health: -100,
            happiness: -100,
            approval: -100
        },
        questions: [
            {
                question: "Even you?",
                choices: [
                    "Everyone but me",
                    "Yep"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
    {
        name: "Lie to the world",
        content: "Tell them you have less than you actually have.",
        results: {
            wealth: 0,
            health: -4,
            happiness: 2,
            approval: 3
        },
        questions: [
            {
                question: "Is it actually gone?",
                choices: [
                    "Yes, we're American",
                    "Nope, we're just saying it is"
                ],
                results: [
                    {
                        wealth: 3,
                        health: -3,
                        happiness: 2,
                        approval: 2
                    },
                    {
                        wealth: 0,
                        health: 4,
                        happiness: -2,
                        approval: -10
                    }
                ]
            }
        ]
        
    },
    {
        name: "Healing Crystals",
        content: "The power of the Earth, in the palm of your hand",
        results: {
            wealth: 0,
            health: -2,
            happiness: 4,
            approval: 2
        },
        questions: [
            {
                question: "Do they actually work",
                choices: [
                    "Yep",
                    "It's called the placebo effect"
                ],
                results: [
                    {
                        wealth: 0,
                        health: -1,
                        happiness: 2,
                        approval: 2
                    },
                    {
                        wealth: 0,
                        health: 2,
                        happiness: 3,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Sponsor Gaming",
        content: "Last Year: Gaming is bad. This Year: Gaming might be okay.",
        results: {
            wealth: 2,
            health: 2,
            happiness: 7,
            approval: 3
        },
        questions: [
            {
                question: "Can I get sponsored?",
                choices: [
                    "No",
                    "Are you a gamer?"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 0,
                        happiness: -1,
                        approval: 1
                    },
                    {
                        wealth: 1,
                        health: 0,
                        happiness: 1,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Shoot everyone that goes outside",
        content: "Lawbreakers require punishment",
        results: {
            wealth: 0,
            health: 3,
            happiness: -5,
            approval: -5
        },
        questions: [
            {
                question: "Going outside is illegal?",
                choices: [
                    "It is now",
                    "Nope, but police need something to do"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 2,
                        happiness: -1,
                        approval: -1
                    },
                    {
                        wealth: -1,
                        health: 2,
                        happiness: -2,
                        approval: -4
                    }
                ]
            }
        ]
        
    },
    {
        name: "Censorship",
        content: "Ideas are bad, unless they're mine",
        results: {
            wealth: -3,
            health: 0,
            happiness: -2,
            approval: -5
        },
        questions: [
            {
                question: "What about mine?",
                choices: [
                    "You're fired",
                    "What idea?"
                ],
                results: [
                    {
                        wealth: -1,
                        health: -2,
                        happiness: -1,
                        approval: -1
                    },
                    {
                        wealth: 1,
                        health: 2,
                        happiness: 1,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Book Burning",
        content: "It's for fuel, they say, not to hide our past, they say.",
        results: {
            wealth: 1,
            health: 1,
            happiness: -2,
            approval: -2
        },
        questions: [
            {
                question: "Even Harry Potter?",
                choices: [
                    "Yes",
                    "What's that?"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 0,
                        happiness: -1,
                        approval: -1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -1,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Injecting Bleach",
        content: "\"If we could somehow get disinfectant into the body.\"",
        results: {
            wealth: 0,
            health: -3,
            happiness: 0,
            approval: -1
        },
        questions: [
            {
                question: "Does it actually work?",
                choices: [
                    "Yes",
                    "It's what the scientists say"
                ],
                results: [
                    {
                        wealth: 0,
                        health: -2,
                        happiness: 1,
                        approval: -1
                    },
                    {
                        wealth: 0,
                        health: 2,
                        happiness: 1,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Swallow the sun",
        content: "\"My medical experts say the UV light could kill the bacteria\"",
        results: {
            wealth: -1,
            health: -3,
            happiness: 0,
            approval: 2
        },
        questions: [
            {
                question: "Do you think that there is enough sun to go around?",
                choices: [
                    "If it is as large as Joe Mama",
                    "no"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 3,
                        happiness: -2,
                        approval: 0
                    },
                    {
                        wealth: 0,
                        health: -2,
                        happiness: 0,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
    {
        name: "Ban antibiotics",
        content: "\"The germ has gotten so brilliant, the antibiotic can't keep up with it\"",
        results: {
            wealth: 5,
            health: -4,
            happiness: 0,
            approval: 2
        },
        questions: [
            {
                question: "Don't they still work?",
                choices: [
                    "Not anymore",
                    "We need to ban something"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -1,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 1,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Sedition Act",
        content: "\"I use only the best words.\" Anyone who tries to say otherwise will be shot",
        results: {
            wealth: -3,
            health: 0,
            happiness: -10,
            approval: -10
        },
        questions: [
            {
                question: "I have good words too!",
                choices: [
                    "Guards!",
                    "No you don't"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 0,
                        happiness: -2,
                        approval: -2
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -1,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Make everything free",
        content: "Communism.",
        results: {
            wealth: -5,
            health: 0,
            happiness: 5,
            approval: 10
        },
        questions: [
            {
                question: "So we don't need money?",
                choices: [
                    "Nope!",
                    "You do"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 3,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -2,
                        approval: -3
                    }
                ]
            }
        ]
        
    },
    {
        name: "Invest in renewables",
        content: "\"With oil prices at their lowest ever, now would be a great time to invest in renewables\"",
        results: {
            wealth: -5,
            health: 1,
            happiness: 5,
            approval: 5
        },
        questions: [
            {
                question: "What do you consider renewables?",
                choices: [
                    "Coal power plants",
                    "Things that don't pollute the environment."
                ],
                results: [
                    {
                        wealth: 3,
                        health: -1,
                        happiness: -1,
                        approval: -1
                    },
                    {
                        wealth: 1,
                        health: 1,
                        happiness: 2,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Ban jobs",
        content: "\"When we come out of this, we are not going back\"",
        results: {
            wealth: -5,
            health: 0,
            happiness: 10,
            approval: 10
        },
        questions: [
            {
                question: "Where will I work then?",
                choices: [
                    "You won't",
                    "In your basement"
                ],
                results: [
                    {
                        wealth: -1,
                        health: 0,
                        happiness: 2,
                        approval: 2
                    },
                    {
                        wealth: 2,
                        health: -1,
                        happiness: -1,
                        approval: -3
                    }
                ]
            }
        ]
        
    },
    {
        name: "Blame others",
        content: "That one Asian country did it",
        results: {
            wealth: 0,
            health: 0,
            happiness: 10,
            approval: 10
        },
        questions: [
            {
                question: "How do you sleep at night knowing that thousands of people are dying?",
                choices: [
                    "NyQuil",
                    "I don't know, ask China"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: -2
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 2,
                        approval: 2
                    }
                ]
            }
        ]
        
    },
        
    
    {
        name: "Hold a Rally",
        content: "\"Come on out to Chinatown, it's great out here\"",
        results: {
            wealth: 0,
            health: -5,
            happiness: 5,
            approval: 5
        },
        questions: [
            {
                question: "Why Chinatown?",
                choices: [
                    "I love China",
                    "Why not?"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -2,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 2,
                        approval: 1
                    }
                ]
            },
            {
                question: "Are you a Chinese spy?",
                choices: [
                    "No...",
                    "Absolutely not!"
                ],
                results: [
                    {
                        wealth: -2,
                        health: 0,
                        happiness: -3,
                        approval: -10
                    },
                    {
                        wealth: 1,
                        health: 0,
                        happiness: 2,
                        approval: 3
                    }
                ]
            }
        ]
        
    },
    {
        name: "Give out free Build-A-Bear coupons",
        content: "Sometimes, in this crisis, we need a stuffed animal",
        results: {
            wealth: -2,
            health: 2,
            happiness: 4,
            approval: 4
        },
        questions: [
            {
                question: "Why not Amazon gift cards?",
                choices: [
                    "Amazon sucks",
                    "Because Build-A-Bear is better"
                ],
                results: [
                    {
                        wealth: -3,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    },
                    {
                        wealth: 2,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
    {
        name: "Take down the 5G towers",
        content: "If you see one, you have cancer.",
        results: {
            wealth: -1,
            health: 0,
            happiness: 1,
            approval: -1
        },
        questions: [
            {
                question: "That's fake, you know.",
                choices: [
                    "It's real",
                    "It's for the people"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 1,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
    {
        name: "Deport everyone",
        content: "Everyone's an immigrant, everyone has to go.",
        results: {
            wealth: -100,
            health: -100,
            happiness: -100,
            approval: -100
        },
        questions: [
            {
                question: "Where will everyone go?",
                choices: [
                    "Out of America",
                    "China"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
    {
        name: "Immigration Moratorium",
        content: "\"Never let a good crisis go to waste\"",
        results: {
            wealth: -1,
            health: 2,
            happiness: 0,
            approval: 0
        },
        questions: [
            {
                question: "What does Moratorium mean?",
                choices: [
                    "It means no more immigration",
                    "Are you stupid?"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -2,
                        approval: 0
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 2,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Leave your nation",
        content: "At least you will survive",
        results: {
            wealth: -100,
            health: -100,
            happiness: -100,
            approval: -100
        },
        questions: [
            {
                question: "Who's going to be the next president?",
                choices: [
                    "No one",
                    "Not me"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
    {
        name: "Pretend it doesn't exist",
        content: "Coronavirus is not real. China is using to shut down our country.",
        results: {
            wealth: 20,
            health: -20,
            happiness: 10,
            approval: -5
        },
        questions: [
            {
                question: "All those deaths are fake?",
                choices: [
                    "Yes, China has hacked our news",
                    "They're not from coronavirus"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -2,
                        approval: -1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -1,
                        approval: 2
                    }
                ]
            }
        ]
        
    },
    {
        name: "Distribute a Placebo",
        content: "Scientists have developed a vaccine!.",
        results: {
            wealth: 10,
            health: -15,
            happiness: 20,
            approval: 20
        },
        questions: [
            {
                question: "It looks like water...",
                choices: [
                    "It is",
                    "You must be color blind"
                ],
                results: [
                    {
                        wealth: -2,
                        health: 0,
                        happiness: -3,
                        approval: -5
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 2,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
    {
        name: "Release the criminals",
        content: "Can't have outbreaks in our jails",
        results: {
            wealth: 3,
            health: 2,
            happiness: -2,
            approval: 0
        },
        questions: [
            {
                question: "But ... they're criminals.",
                choices: [
                    "Not anymore",
                    "So?"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: -1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Give illegal immigrants jobs",
        content: "Let them work as nurses",
        results: {
            wealth: 3,
            health: 2,
            happiness: 2,
            approval: -2
        }
        
    },
    {
        name: "Sacrifice a lamb per person to the sun god.",
        content: "Ooh ha ha. Ooh ha ha",
        results: {
            wealth: -1,
            health: 3,
            happiness: 3,
            approval: 3
        },
        questions: [
            {
                question: "What sun god?",
                choices: [
                    "You're going to be sacrificed",
                    "The sun god."
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -2,
                        approval: 0
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: 1
                    }
                ]
            }
        ]
        
    },
    {
        name: "Make prayers mandatory",
        content: "The gods will help us",
        results: {
            wealth: -1,
            health: 0,
            happiness: 3,
            approval: -2
        },
        questions: [
            {
                question: "God doesn't exist.",
                choices: [
                    "You are cursed!",
                    "God does exist"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: -1,
                        approval: 1
                    },
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 0,
                        approval: -2
                    }
                ]
            }
        ]
        
    },
    {
        name: "Start Online Schools",
        content: "Give schools an online option",
        results: {
            wealth: 1,
            health: 2,
            happiness: 3,
            approval: 2
        },
        questions: [
            {
                question: "What if students don't have wifi?",
                choices: [
                    "Then they don't have school",
                    "We buy them wifi"
                ],
                results: [
                    {
                        wealth: 0,
                        health: 0,
                        happiness: 2,
                        approval: -2
                    },
                    {
                        wealth: -2,
                        health: 0,
                        happiness: -2,
                        approval: 2
                    }
                ]
            }
        ]
        
    },
    {
        name: "Close Schools",
        content: "Close all schools",
        results: {
            wealth: -1,
            health: 3,
            happiness: -3,
            approval: 2
        }
        
    },
    {
        name: "Close Parks",
        content: "Keep people inside their homes at all times",
        results: {
            wealth: 0,
            health: 3,
            happiness: -5,
            approval: 0
        }
        
    },
    {
        name: "Encourage people to go to parks",
        content: "Parks are good for people's health",
        results: {
            wealth: 0,
            health: -2,
            happiness: 2,
            approval: 3
        }
        
    },
    {
        name: "Ban smooth jazz",
        content: "Smooth jazz the devil",
        results: {
            wealth: 2,
            health: 0,
            happiness: -2,
            approval: -2
        }
        
    },
    {
        name: "Cleanse the subways",
        content: "Only 5 weeks too late",
        results: {
            wealth: -2,
            health: 5,
            happiness: 4,
            approval: 5
        }
        
    },
    {
        name: "Fire congress",
        content: "Charles is in charge now",
        results: {
            wealth: 5,
            health: 0,
            happiness: 3,
            approval: -2
        }
        
    },
    {
        name: "Ration food",
        content: "Tomorrow on the news: How to plant a victory garden",
        results: {
            wealth: 4,
            health: -1,
            happiness: 0,
            approval: 2
        }
        
    },
    {
        name: "Convert Factories",
        content: "More masks, more better!",
        results: {
            wealth: -3,
            health: 5,
            happiness: 0,
            approval: 3
        }
        
    },
    {
        name: "Kill the Elderly",
        content: "Don't let Coronavirus get them",
        results: {
            wealth: 0,
            health: 5,
            happiness: -10,
            approval: -10
        }
        
    },
    {
        name: "Buy homeless people shelter",
        content: "They need somewhere to stay, too.",
        results: {
            wealth: -5,
      
            health: 5,
            happiness: 3,
            approval: -3
        }
        
    },
    {
        name: "Ban reincarnation",
        content: "YOLO, not YOLT",
        results: {
            wealth: 0,
            health: 0,
            happiness: -2,
            approval: 0
        }
        
    },
    {
        name: "Get rid of pollution laws",
        content: "No bribes here, officer",
        results: {
            wealth: 10,
            health: -5,
            happiness: -3,
            approval: -2
        }
        
    },
    {
        name: "Put everyone in a plastic bubble",
        content: "No contact, no problem",
        results: {
            wealth: 0,
            health: 3,
            happiness: -3,
            approval: 0
        }
        
    },
    {
        name: "Rename Coronavirus to Happiness Disease",
        content: "\"Millions infected with Happiness Disease\"",
        results: {
            wealth: 0,
            health: 0,
            happiness: 10,
            approval: 0
        }
        
    },
    {
        name: "Put concrete in everyone's lungs",
        content: "It's a well known fact that the virus can't penetrate concrete.",
        results: {
            wealth: 0,
            health: 3,
            happiness: -1,
            approval: -3
        }
        
    },
    {
        name: "Deport Infected to China",
        content: "Get back at them for giving us this disease!",
        results: {
            wealth: -2,
            health: 5,
            happiness: -10,
            approval: -10
        }
        
    },
    {
        name: "Kill all the healthy people",
        content: "If there's no one to get infected, no one will get infected!",
        results: {
            wealth: -10,
            health: 5,
            happiness: -10,
            approval: -10
        }
        
    },
    {
        name: "Give everyone the virus",
        content: "Herd immunity",
        results: {
            wealth: 0,
            health: -3,
            happiness: -3,
            approval: 2
        }
        
    },
    {
        name: "Open your borders",
        content: "It's already too late",
        results: {
            wealth: 5,
            health: -3,
            happiness: 3,
            approval: 0
        }
        
    },
    {
        name: "Arrest Sick People",
        content: "It's Illegal to be sick",
        results: {
            wealth: 0,
            health: 0,
            happiness: -3,
            approval: -3
        }
        
    },
    {
        name: "Declare War on China",
        content: "This pandemic is their fault!",
        results: {
            wealth: -10,
            health: -10,
            happiness: -10,
            approval: 5
        }
        
    },
    {
        name: "Tweet about it",
        content: "Twitter is the solution to all of our problems",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 3
        }
        
    },
    {
        name: "Make Mexico pay for it",
        content: "They can cover the cost of our ventilators!",
        results: {
            wealth: 10,
            health: 5,
            happiness: 5,
            approval: 5
        }
        
    },
    {
        name: "Upload everyone's conciousness",
        content: "The botnet starts now",
        results: {
            wealth: 0,
            health: 5,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "Ban Video Games",
        content: "They distract our researchers",
        results: {
            wealth: 5,
            health: 5,
            happiness: -5,
            approval: 3
        }
        
    },
    {
        name: "Distribute guns",
        content: "Protect yourself! Shoot the sick!",
        results: {
            wealth: -1,
            health: 3,
            happiness: 3,
            approval: -3
        }
        
    },
    {
        name: "Ban rare steak",
        content: "The viruses live in the meat",
        results: {
            wealth: 0,
            health: 3,
            happiness: -3,
            approval: -5
        }
        
    },
    {
        name: "Confiscate all savings",
        content: "\"We need that money\"",
        results: {
            wealth: 3,
            health: 0,
            happiness: -3,
            approval: -3
        }
        
    },
    {
        name: "Go on a vacation to China",
        content: "Everyone else needs to stay in America, though",
        results: {
            wealth: 0,
            health: 0,
            happiness: -3,
            approval: -10
        }
        
    },
    {
        name: "Take over Mexico",
        content: "\"We're not invading them, we're just helping them out\"",
        results: {
            wealth: 3,
            health: -3,
            happiness: -2,
            approval: -5
        }
        
    },
    {
        name: "Everyone drinks chicken noodle soup",
        content: "If it works for the flu, it works for the virus",
        results: {
            wealth: -2,
            health: 1,
            happiness: 5,
            approval: 5
        }
        
    },
    {
        name: "Beg for money",
        content: "We need money bad",
        results: {
            wealth: 10,
            health: 5,
            happiness: 5,
            approval: -5
        }
        
    },
    {
        name: "Nuke China",
        content: "This is all their fault",
        results: {
            wealth: -100,
            health: -100,
            happiness: -100,
            approval: -100
        }
        
    },
    {
        name: "Start a state-owned news company",
        content: "\"It's not propaganda\"",
        results: {
            wealth: 0,
            health: 3,
            happiness: 3,
            approval: -3
        }
        
    },
    {
        name: "Sell Alaska",
        content: "Anything for the money",
        results: {
            wealth: 30,
            health: 5,
            happiness: -3,
            approval: -5
        }
        
    },
    {
        name: "Colonize the Moon",
        content: "That's where all the sick people will go",
        results: {
            wealth: -3,
            health: 5,
            happiness: 5,
            approval: 3
        }
        
    },
    {
        name: "Give subsidies to small businesses",
        content: "Keep them afloat",
        results: {
            wealth: -3,
            health: 0,
            happiness: 3,
            approval: 5
        }
        
    },
    {
        name: "Distribute Alcohol",
        content: "It kills coronavirus",
        results: {
            wealth: -5,
            health: 10,
            happiness: 5,
            approval: -7
        }
        
    },
    {
        name: "Hot glue masks to our mouths",
        content: "TROOM TROOM",
        results: {
            wealth: 1,
            health: 3,
            happiness: -5,
            approval: -5
        }
        
    },
    {
        name: "Close down TV networks",
        content: "\"Studies show that coronavirus can spread through TV screens\"",
        results: {
            wealth: -3,
            health: 0,
            happiness: -5,
            approval: -10
        },
        questions: [
            {
                question: "Will YouTube still be allowed?",
                choices: [
                    "YouTube is not TV",
                    "Only government propaganda is allowed."
                ],
                results: [
                    {
                        wealth: 0,
                        health: -1,
                        happiness: 3,
                        approval: 3
                    },
                    {
                        wealth: 0,
                        health: 2,
                        happiness: 0,
                        approval: 0
                    }
                ]
            }
        ]
        
    },
        
    
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },
    {
        name: "",
        content: "",
        results: {
            wealth: 0,
            health: 0,
            happiness: 0,
            approval: 0
        }
        
    },

];