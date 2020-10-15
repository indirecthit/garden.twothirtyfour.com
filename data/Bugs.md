# Software has bugs
Software, by its nature, has bugs and will always have bugs. Or, to put it another way, the only reliable way to avoid bugs is to not write any software at all.

# Why do bugs happen?
There are three main reasons why bugs happen:
- Incorrect implementation - An unrelated change caused it, bad technical architecture, not handling error scenarios
- Incorrect specifications - Due to miscommunication, lack of clarity, or not understanding how the specification impacts the system
- Unknown specifications - The product is being used in a way that we never imagined

# How can we stop bugs?
Avoiding bugs doesn't mean more testing, testing is a classic example of treating the symptom in [[Treat the cause, not the symptom]]. 

**Incorrect implementation** is the responsibility of the engineering team. Some ways for them to solve this include:
- Code reviews
- Test Driven Development

**Incorrect specifications** and **unknown specifications** are the responsibility of the product and design team. Some ways to address this include:
- We are responsible for documenting the flows and thinking about how the new feature interacts within the system.
- Use the tools available to us to communicate how the feature should work. This includes wireframes, user flows, user stories, etc. It’s not following specific formats that matters, but using the right tool to communicate the spec and avoid any confusion.
- Use discovery and user testing to understand how someone will use this feature, make sure we adapt our specifications to any new use cases that come up.
- Use existing principles and design systems to avoid the guesswork. But make sure to communicate how the principles and components can be used.
- We document common scenarios with each new feature. This includes error states (the copy should be actionable and clear!), empty states, placeholders, and more.

# Zero Bug Policy
## Classifying of Issues
When a bug comes in, we look at it and go through a simple flowchart:

TODO: Add flowchart

This classification makes it clearer to folks on what will be fixed vs not. This is similar to the principles of [[Collecting Ideas from Stakeholders & Customers]]. 

## Bugs take priority
This will happen two ways:
- Bugs are the next thing we work on. This is everyones responsibility to pick up any new bugs and start working on them when you are done with your current task.
- We will not release any functionality to production that still has bugs associated with it.