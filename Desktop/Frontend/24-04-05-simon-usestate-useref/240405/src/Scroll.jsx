import { useRef } from "react"

export default function Scroll() {
	const sectionOne = useRef ()
	const sectionTwo = useRef ()
	const sectionThree = useRef ()

	function scrollToSection(sectionNum) {
		sectionNum.current.scrollIntoView({block: "center", behavior: "smooth"})
	}

	return (
		<>
		<h1>Click to scroll!</h1>
		<button onClick={()=>scrollToSection(sectionOne)}>Scroll to section 1</button>
		<button onClick={()=>scrollToSection(sectionTwo)}>Scroll to section 2</button>
		<button onClick={()=>scrollToSection(sectionThree)}>Scroll to section 3</button>

		<section ref={sectionOne}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt ipsam nobis architecto voluptas magnam nemo optio ad dolorem enim cum soluta atque, rem rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt 
		</section>

		<h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi inventore ipsum facere? Iusto earum quasi corrupti reprehenderit delectus, commodi architecto sit eum nam illo ducimus modi inventore assumenda? Esse, laboriosam.</h3>

		<section ref={sectionTwo}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut volLorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt uptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt ipsam nobis architecto voluptas magnam nemo optio ad dolorem enim cum soluta atque, rem rerum.
		</section>

		<section ref={sectionThree}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, itaque. Obcaecati, vitae ducimus nobis dicta maiores unde cupiditate tempora eveniet dolore deleniti officiis nam voluptates quod, commodi incidunt cum eaque.
			Error, quas! Dolore obcaecati veritatis nostrum est animi corrupti reiciendis! Ea magni laboriosam dolorum eveniet, veniam, eius, nulla error at repellat sit tempore. Tempora quas cupiditate, illo maxime asperiores error.
			Nesciunt blanditiis deleniti, voluptate in totam nulla sapiente optio illo ab cupiditate sequi sunt nobis fugiat placeat sed aspernatur nam pariatur, repellendus accusantium possimus perferendis cumque nisi officia. Eius, deserunt.
			Laboriosam illum rem, ducimus quaerat cum magni veritatis enim quis dolore quidem blanditiis non hic facere fugit recusandae porro. Voluptatum consequatur ullam quis exercitationem! Provident suscipit soluta sunt earum doloribus!
			Suscipit a maiores quo. Laudantium deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt deleniti optio nostrum voluptate facilis cumque molestias rerum voluptatum ducimus minus asperiores officiis voluptates reiciendis tenetur, porro vero in voluptatem aspernatur magni commodi. Quia, ullam?
			Commodi labore reprehenderit ut voluptatum consequuntur, alias non est. Quos facilis repudiandae soluta alias saepe quibusdam esse sit earum placeat, adipisci suscipit repellat rerum rem, vero eos, similique distinctio dicta.
			Aperiam sit magnam nobis laborum sunt repudiandae magni illo. Dolor voluptates aut porro consectetur assumenda laboriosam beatae deleniti eveniet odit, tempore sed, error molestiae molestias. Et distinctio quis libero expedita!
			Suscipit quia facere fuga ipsam veniam, rerum voluptas aliquid et odit fugiat neque nemo error distinctio sequi esse consequatur cum. Natus officia a nostrum corrupti minima inventore repellendus error soluta!
			Veniam rerum earum quasi doloremque nemo saepe voluptatum. Animi, modi exercitationem! Quibusdam fuga dignissimos, tempore quas veritatis officia. Necessitatibus a magni explicabo voluptatibus nobis alias voluptatem quis nesciunt. Neque, nihil.
			Earum dolor quas dicta sapiente repudiandae officia autem eius aut neque? Animi deleniti ab nesciunt ipsam nobis architecto voluptas magnam nemo optio ad dolorem enim cum soluta atque, rem rerum.
		</section>
		
		</>
	)
}