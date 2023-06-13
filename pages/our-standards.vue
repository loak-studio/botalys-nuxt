<script setup>
import Moutain from "~/assets/images/mountain_dark_sky.jpg"
import LeafDrop from "~/assets/images/leaf_drop.jpeg"
import Slice1 from "~/assets/images/standards/slice-1.png"
import Slice2 from "~/assets/images/standards/slice-2.png"
import Slice3 from "~/assets/images/standards/slice-3.png"
import Slice4 from "~/assets/images/standards/slice-4.png"

import River from "~/assets/images/river.jpg"
</script>

<template>
    <hero-with-photo :image="Moutain" title="Our standards"
        :paragraphs="[
            `BOTALYS ambitions to set higher standards in botanicals sourcing for brands that will not settle for anything less than excellence.`]" />
    <text-image :image-src="LeafDrop">
        <div>
            <Tag color="yellow">Get in touch</Tag>
            <h3 class="h3">Let's go further together</h3>
        </div>
        <div>
            <p class="text">Thanks to its innovative proprietary technology, BOTALYS is able to produce the most pristine
                quality botanicals in the world.</p>
            <p class="text">
                From absolute purity to complete standardization, BOTALYS has taken up the bold challenge of ticking all the
                boxes of an ideal botanicals supply. So that our clients no longer have to choose between quality,
                effectiveness and sustainability.
            </p>
        </div>
    <Button href="#" color="outline">Contact us</Button>
</text-image>

<our-standards-tabs-container :items="[
    {
        title:'Adulteration free',
        description:[`Adulteration is a widespread issue in the industry of botanicals. We, at BOTALYS, have pledged to bring to market the most thorough seed to ingredient traceability to suppress any risk of adulteration along the process.`],
        tabs:[
            {
                title:'How do we achieve that ?',
                content:[
                    'BOTALYS only uses proprietary cultivars for each plant it grows. Each botanical species is grown alone in a purified environment, to ensure full traceability. ',
                    'In addition, our quality team regularly controls the authenticity of its cultivars through DNA analysis. '
                ]
            },
            {
                title:'How can we guarantee that ?',
                content:['BOTALYS can provide DNA test results attesting to the botanical identity and unadulterated nature of the product.']
            }
        ]
    },

    {
        image:Slice1,
        title:'Absolute purity',
        description:[`We, at BOTALYS, have a zero-tolerance policy when it comes to contaminants. Whether it is pesticides, heavy metals or ethylene oxide, any contamination at all – even in trace amounts – carries a risk for health and is therefore inadmissible. BOTALYS’ ingredients however, are entirely safe and free from any contaminants whatsoever. `],
        tabs:[
            {
                title:'How do we achieve that ?',
                content:[
                    'BOTALYS’ medicinal plants are grown under sterile conditions in clinical grade facilities. And because the plant’s environment is purified and free of any contamination, its cultivation does not require the use of pesticides. ',
                    'For each botanical, the entire supply chain is vertically integrated from seed to ingredient, allowing our team full control of each step, without any externalization. '
                ]
            },
            {
                title:'How can we guarantee that ?',
                content:[
                    'We can provide certified third-party analysis attesting to the purity of each product. '
                ]
            }
        ]
    },

{
        image:Slice2,
    title:'Complete standardization',
    description:[` Like any natural raw material, plants have a high degree of molecular variability, which makes it difficult to ensure consistent clinical potency. In response to this, the industry has come up with extract standardization. However, only a minimal fraction of the plants’ molecular spectrum is standardized; the rest of it remains highly variable. A medicinal plant is a complex synergistic bioactive cocktail and at BOTALYS, we believe molecular precision and standardization are the key delivering potent and consistent health benefits. `],
    tabs:[
        {
            title:'How do we achieve that ?',
            content:[
                'By using a unique plant cultivar grown under strictly identical environmental conditions, BOTALYS can produce the same phytochemical fingerprint in every batch. ',
                'Our medicinal plants are molecularly analyzed on a weekly basis to ensure complete standardization and avoid any deviation from the strictly determined optimal profile. '
            ]
        },
        {
            title:'How can we guarantee that ?',
            content:[
                'For its Korean ginseng, BOTALYS quantifies more than 25 key phytonutrients in order to ensure that the process delivers perfectly stable products from one batch to another. '
            ]
        }
    ]
},

{

    image:Slice3,
    title:'Wilderness preservation',
    description:[` Most premium ingredient suppliers claim to have a sustainable sourcing and pride themselves on respecting the environment, yet most medicinal plants come directly from wild harvesting or intensive crop monoculture. `,
`Even when organic or responsible, both intensive agriculture and wild plant collection approaches share a massive environmental drawback: they damage biodiversity. BOTALYS’ approach allows us to just let those wild biotopes be, which is the best way we know to protect them. `],
    tabs:[
        {
            title:'How do we achieve that ?',
            content:[
                'Every single BOTALYS plant is grown in our European-based indoor farm, a 2000 m2 facility built to grow more than 50 tons of fresh medicinal plants each year. ',
                'Since the production capacity can be expanded vertically, BOTALYS’ process requires no deforestation. '
            ]
        },
        {
            title:'How can we guarantee that ?',
            content:[
                ' BOTALYS can provide a statement of origin that certifies that every plant is entirely grown in our clinical-grade facility in Belgium. '
            ]
        }
    ]
},

{
    image:Slice4,
    title:'Resilient supply chain',
    description:[`In the current context of increasing demand, climate change and geopolitical instability, the supply chain of qualitative medicinal plants has been shaken to its core and the supply and use of botanical ingredients is becoming increasingly dicey. BOTALYS’ unique approach allows us to provide our customers with a resilient supply chain with minimal risks and consistent batch-to-batch quality. `],
    tabs:[
        {
            title:'How do we achieve that ?',
            content:[
                'BOTALYS’ harvest yield is stable and independent of seasonal and climatic factors and our medicinal plants can be harvested all year long. ',
                'In addition, BOTALYS’ indoor farm is located at the heart of Europe, in one of the most stable regions in the world. '
            ]
        },
        {
            title:'How can we guarantee that ?',
            content:[
                'You will have to trust us on that one… '
            ]
        }
    ]
}
]"/>
 <text-image :imageSrc="River">
    <div>
      <Tag color="yellow">Biomimetic Indoor Farming</Tag>
      <h3 class="h3">We raise the bar for botanicals sourcing</h3>
    </div>
    <p class="text">Thanks to its innovative proprietary technology, BOTALYS is able to produce the most pristine quality botanicals in the world.</p>
    <p class="text">From absolute purity to complete standardization, BOTALYS has taken up the bold challenge of ticking all the boxes of an ideal botanicals supply. So that our clients no longer have to choose between quality, effectiveness and sustainability.</p>
    <Button href="#" color="outline">Contact us</Button>
  </text-image>
</template>