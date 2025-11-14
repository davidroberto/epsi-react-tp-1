import './App.css'

function App() {


    const user = {
        firstName: "David",
        lastName: "Robert",
        age: 35

    }

    const articles = [
        {
            id: 1,
            title: "Understanding React Hooks",
            content: "React Hooks are functions that let you use state and other React features without writing a class.",
        },
        {
            id: 2,
            title: "A Guide to JavaScript Closures",
            content: "A closure is the combination of a function and the lexical environment within which that function was declared.",
        },
        {
            id: 3,
            title: "CSS Grid Layout Tutorial",
            content: "CSS Grid Layout is a two-dimensional layout system for the web that allows you to create complex layouts easily.",
        }
    ]

    const displayFullName = () => {
        return user.firstName + " " + user.lastName;
    }

  return (
    <>

        <header>
            <h1>Welcome, {displayFullName()}!</h1>
        </header>

        <section>

            {articles.map((article) => {
                return (
                    <article>
                        <h1>{article.title}</h1>
                    </article>
                )
            })}

        </section>


    </>
  )
}

export default App
