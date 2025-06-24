import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Select/Multi Select',
  // tags: ['autodocs'],
  args: {
    name: 'multiselect',
    disabled: false,
    showSearch: true,
    showSelectAll: true,
    error: false,
    errorMessage: 'Some error',
    label: '',
    placeholder: 'Placeholder',
    showClearButton: true
  },
  argTypes: {
    disabled: {
      description: 'Disable the input field.',
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    name: {
      description: `For a <*form*> element, the name attribute is  used as a reference when the data is submitted.`,
      control: 'text',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'string',
        },
      },
    },
    showSearch: {
      description: 'Show a search input.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    showSelectAll: {
      description: 'Show a checkbox to select all options.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    showClearButton: {
      description: 'Shows the clear icon button.',
      control: 'boolean',
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: true
        }
      }
    },
    error: {
      description: 'Show error state.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display.',
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'Error',
        },
        type: {
          summary: 'string',
        },
      },
    },
    label: {
      description: 'Label over the input field.',
      control: 'text',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      description: 'Label inside the input field.',
      control: 'text',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'string',
        },
      },
    },
    options: {
      description: 'Takes an array of objects in the following format.',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'Details',
          detail:
            `'Array<{ value: string, label: string, selected: boolean, children?: Array<{ value: string, label: string, selected: boolean }> }>'`,
        },
      },
    },
    ifxSelect: {
      action: 'ifxSelect',
      description: 'Custom event emitted when item is selected or unselected.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxSelect={handleInput}\nVue:@ifxSelect="handleInput"\nAngular:(ifxSelect)="handleInput()"\nVanillaJs:.addEventListener("ifxSelect", (event) => {//handle input});',
        },
      },

    },
    ifxOpen: {
      action: 'ifxOpen',
      description: 'Custom event emitted when multiselect is opened.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxOpen={handleChange}\nVue:@ifxOpen="handleChange"\nAngular:(ifxOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});',
        },
      },

    }
  },
};

const SlotBasedTemplate = args => {
  const template = `<ifx-multiselect
  name='${args.name}'
  disabled='${args.disabled}'
  error='${args.error}'
  error-message='${args.errorMessage}'
  label='${args.label}'
  placeholder='${args.placeholder}'
  show-search='${args.showSearch}'
  show-select-all='${args.showSelectAll}'
  show-clear-button='${args.showClearButton}'>

  <ifx-multiselect-option value="frontend">
    Frontend Development

    <ifx-multiselect-option value="frameworks" slot="children">
      JavaScript Frameworks
      <ifx-multiselect-option value="react" slot="children">
        React
        <ifx-multiselect-option value="react-router" slot="children">React Router</ifx-multiselect-option>
        <ifx-multiselect-option value="redux" slot="children">Redux</ifx-multiselect-option>
        <ifx-multiselect-option value="react-query" slot="children">React Query</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="vue" selected slot="children">
        Vue.js
        <ifx-multiselect-option value="vuex" slot="children">Vuex</ifx-multiselect-option>
        <ifx-multiselect-option value="vue-router" slot="children">Vue Router</ifx-multiselect-option>
        <ifx-multiselect-option value="nuxt" slot="children">Nuxt.js</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="angular" slot="children">
        Angular
        <ifx-multiselect-option value="angular-material" slot="children">Angular Material</ifx-multiselect-option>
        <ifx-multiselect-option value="ngrx" slot="children">NgRx</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="css-tools" slot="children">
      CSS Tools & Frameworks
      <ifx-multiselect-option value="preprocessors" slot="children">
        CSS Preprocessors
        <ifx-multiselect-option value="sass" slot="children">Sass/SCSS</ifx-multiselect-option>
        <ifx-multiselect-option value="less" slot="children">Less</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="css-frameworks" slot="children">
        CSS Frameworks
        <ifx-multiselect-option value="tailwind" slot="children">Tailwind CSS</ifx-multiselect-option>
        <ifx-multiselect-option value="bootstrap" slot="children">Bootstrap</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="backend">
    Backend Development

    <ifx-multiselect-option value="nodejs-stack" slot="children">
      Node.js Ecosystem
      <ifx-multiselect-option value="runtime" slot="children">
        Runtime Environment
        <ifx-multiselect-option value="nodejs" slot="children">Node.js</ifx-multiselect-option>
        <ifx-multiselect-option value="deno" slot="children">Deno</ifx-multiselect-option>
        <ifx-multiselect-option value="bun" slot="children">Bun</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="nodejs-frameworks" slot="children">
        Node.js Frameworks
        <ifx-multiselect-option value="express" slot="children">Express.js</ifx-multiselect-option>
        <ifx-multiselect-option value="nestjs" slot="children">NestJS</ifx-multiselect-option>
        <ifx-multiselect-option value="fastify" slot="children">Fastify</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="python-stack" slot="children">
      Python Ecosystem
      <ifx-multiselect-option value="python-frameworks" slot="children">
        Web Frameworks
        <ifx-multiselect-option value="django" slot="children">
          Django
          <ifx-multiselect-option value="django-rest" slot="children">Django REST Framework</ifx-multiselect-option>
          <ifx-multiselect-option value="django-channels" slot="children">Django Channels</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="flask" slot="children">Flask</ifx-multiselect-option>
        <ifx-multiselect-option value="fastapi" selected slot="children">FastAPI</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="java-stack" slot="children">
      Java Ecosystem
      <ifx-multiselect-option value="java-frameworks" slot="children">
        Enterprise Frameworks
        <ifx-multiselect-option value="spring" selected slot="children">
          Spring Framework
          <ifx-multiselect-option value="spring-boot" slot="children">Spring Boot</ifx-multiselect-option>
          <ifx-multiselect-option value="spring-security" slot="children">Spring Security</ifx-multiselect-option>
          <ifx-multiselect-option value="spring-data" slot="children">Spring Data</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="quarkus" slot="children">Quarkus</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="database">
    Database Systems

    <ifx-multiselect-option value="relational" slot="children">
      Relational Databases
      <ifx-multiselect-option value="postgresql-family" slot="children">
        PostgreSQL Family
        <ifx-multiselect-option value="postgresql" slot="children">PostgreSQL</ifx-multiselect-option>
        <ifx-multiselect-option value="cockroachdb" slot="children">CockroachDB</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="mysql-family" slot="children">
        MySQL Family
        <ifx-multiselect-option value="mysql" slot="children">MySQL</ifx-multiselect-option>
        <ifx-multiselect-option value="mariadb" slot="children">MariaDB</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="nosql" slot="children">
      NoSQL Databases
      <ifx-multiselect-option value="document" slot="children">
        Document Stores
        <ifx-multiselect-option value="mongodb-family" slot="children">
          MongoDB Family
          <ifx-multiselect-option value="mongodb" slot="children">MongoDB</ifx-multiselect-option>
          <ifx-multiselect-option value="mongodb-atlas" slot="children">MongoDB Atlas</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="couchdb" slot="children">CouchDB</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="keyvalue" slot="children">
        Key-Value Stores
        <ifx-multiselect-option value="redis" slot="children">Redis</ifx-multiselect-option>
        <ifx-multiselect-option value="memcached" slot="children">Memcached</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="devops">
    DevOps & Infrastructure

    <ifx-multiselect-option value="cloud-providers" slot="children">
      Cloud Platforms
      <ifx-multiselect-option value="aws" slot="children">
        Amazon Web Services
        <ifx-multiselect-option value="aws-compute" slot="children">
          Compute Services
          <ifx-multiselect-option value="ec2" slot="children">EC2</ifx-multiselect-option>
          <ifx-multiselect-option value="lambda" slot="children">Lambda</ifx-multiselect-option>
          <ifx-multiselect-option value="fargate" slot="children">Fargate</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="aws-storage" slot="children">
          Storage Services
          <ifx-multiselect-option value="s3" slot="children">S3</ifx-multiselect-option>
          <ifx-multiselect-option value="ebs" slot="children">EBS</ifx-multiselect-option>
        </ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="azure" slot="children">
        Microsoft Azure
        <ifx-multiselect-option value="azure-compute" slot="children">
          Compute Services
          <ifx-multiselect-option value="azure-vms" slot="children">Virtual Machines</ifx-multiselect-option>
          <ifx-multiselect-option value="azure-functions" slot="children">Azure Functions</ifx-multiselect-option>
        </ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="containerization" slot="children">
      Containerization & Orchestration
      <ifx-multiselect-option value="container-runtimes" slot="children">
        Container Runtimes
        <ifx-multiselect-option value="docker" slot="children">Docker</ifx-multiselect-option>
        <ifx-multiselect-option value="podman" slot="children">Podman</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="orchestration" slot="children">
        Orchestration
        <ifx-multiselect-option value="kubernetes" slot="children">
          Kubernetes
          <ifx-multiselect-option value="helm" slot="children">Helm</ifx-multiselect-option>
          <ifx-multiselect-option value="kubectl" slot="children">kubectl</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="docker-swarm" slot="children">Docker Swarm</ifx-multiselect-option>
      </ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>
</ifx-multiselect>`;

  setTimeout(() => {
    document.querySelector('ifx-multiselect').addEventListener('ifxSelect', action('ifxSelect'));
    document.querySelector('ifx-multiselect').addEventListener('ifxOpen', action('ifxOpen'));
  }, 0);

  return template;
};

export const Default = SlotBasedTemplate.bind({});
Default.args = {
  label: 'Technology Stack Selection',
  placeholder: 'Select technologies...',
};
